import React from "react";
import { graphql } from "gatsby";

import Guideline from "../components/Guideline.js";

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <div>
      {edges.map(edge => {
        return (
          <Guideline
            key={edge.node.frontmatter.path}
            frontmatter={edge.node.frontmatter}
          />
        );
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
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
