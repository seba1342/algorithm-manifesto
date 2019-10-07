import React from "react";
import { graphql, Link } from "gatsby";

const Template = props => {
  const title = props.data.markdownRemark.frontmatter.title;
  const html = props.data.markdownRemark.html;
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Template;

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(fields: { slug: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
