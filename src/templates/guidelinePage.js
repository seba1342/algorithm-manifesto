import React from "react";
import { graphql, Link } from "gatsby";

const Template = props => {
  const { title, tags } = props.data.markdownRemark.frontmatter;
  const html = props.data.markdownRemark.html;

  return (
    <div>
      <h1>{title && title}</h1>

      {tags &&
        tags.map((tag, index) => {
          return <p key={`tag-${index}`}>{tag}</p>;
        })}

      <p></p>
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
        tags
      }
    }
  }
`;
