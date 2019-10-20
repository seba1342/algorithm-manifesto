import React from "react";
import { graphql } from "gatsby";

import Guideline from "../components/Guideline.js";
import Header from "../components/Header.js";

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <div>
      <Header />
      {edges.map(edge => {
        return <Guideline key={edge.node.fields.slug} node={edge.node} />;
      })}
    </div>
  );
};

export default Layout;

export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
