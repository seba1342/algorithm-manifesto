import React, { useState } from "react";
import { graphql } from "gatsby";

import Guideline from "../components/Guideline";
import Layout from "../components/Layout";

import "../styles/pages/index.css";

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const tags = data.allMarkdownRemark.distinct;
  const tagCount = Array.from(data.allMarkdownRemark.group).map(
    tagCount => tagCount.totalCount
  );

  const [selectedFilter, setSelectedFilter] = useState(`all`);

  return (
    <Layout>
      <div className="about__container">
        <div className="about__content">
          <p>
            This website's goal is to raise awareness. The vast majority of us
            rely on algorithms to source our news and information - whether that
            be news about family, friends or the world around us.
          </p>
          <p>
            It is important to realise that this information is curated, and
            served to us in a way that will align to our interests. And
            sometimes that is a good thing. But sometimes it can surround us in
            a cocoon without us even knowing. This cocoon has many names such as
            confirmation bias or echo chambers. Places where our information is
            aligned to a common understanding and any deviation from that idea
            is treated as blasphemy.
          </p>
          <p>
            In a world where information is the most accessible it has ever been
            we need to equip ourselves with the tools to seek fact. This means
            understanding that algorithms have been designed to serve us
            information that we want to hear. The easiest way to combat this
            cocoon is simply being aware. Understand that the information being
            presented to you is also being presented for you. Purposefully
            search for opposing points of view. Use other sources of information
            such as friends, libraries and academics. Follow people who
            challenge your perspectives. Engage in conversations with them and
            may you'll teach and learn something.
          </p>
          <p>
            Enjoy the convenience that algorithms provide, while also being
            aware that the things they provide may not be the entire truth.
          </p>
        </div>
      </div>

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
      <div>
        {edges.map(edge => {
          if (
            Array.from(edge.node.frontmatter.tags).includes(selectedFilter) ||
            selectedFilter === `all`
          ) {
            return <Guideline key={edge.node.fields.slug} node={edge.node} />;
          }
        })}
      </div>
    </Layout>
  );
};

export default IndexPage;

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
