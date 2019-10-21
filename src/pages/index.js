import React, { useState } from "react";
import { graphql } from "gatsby";

import Guideline from "../components/Guideline.js";
import Header from "../components/Header.js";

import "../styles/index.css";

const Layout = ({ data }) => {
  console.log(data);
  const { edges } = data.allMarkdownRemark;
  const tags = data.allMarkdownRemark.distinct;
  const tagCount = Array.from(data.allMarkdownRemark.group).map(
    tagCount => tagCount.totalCount
  );

  // useState() Hook
  const [selectedFilter, setSelectedFilter] = useState(`all`);

  return (
    <div>
      <Header />
      <div className="filter">
        <div
          className={`filter__item ${selectedFilter === `all` &&
            `filter__item--active`}`}
          key="all"
          onClick={() => setSelectedFilter(`all`)}
        >{`all (${data.allMarkdownRemark.totalCount})`}</div>
        {tags.map((tag, index) => (
          <div
            className={`filter__item ${selectedFilter === tag &&
              `filter__item--active`}`}
            key={tag}
            onClick={() => setSelectedFilter(tag)}
          >{`${tag} (${tagCount[index]})`}</div>
        ))}
      </div>
      <div style={{}}>
        {edges.map(edge => {
          if (
            Array.from(edge.node.frontmatter.tags).includes(selectedFilter) ||
            selectedFilter === `all`
          ) {
            return <Guideline key={edge.node.fields.slug} node={edge.node} />;
          }
        })}
      </div>
    </div>
  );
};

export default Layout;

export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark {
      totalCount
      distinct(field: frontmatter___tags)
      group(field: frontmatter___tags) {
        totalCount
      }
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`;
