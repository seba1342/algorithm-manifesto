import React from "react";
import { graphql } from "gatsby";

import "../styles/guidelinePage.css";

const Template = props => {
  const { title, tags } = props.data.markdownRemark.frontmatter;
  const html = props.data.markdownRemark.html;

  return (
    <div className={`guideline-page`}>
      <svg
        className={`guideline-page__arrow hvr-backward`}
        width="33"
        height="16"
        viewBox="0 0 33 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.292892 7.2929C-0.0976296 7.68342 -0.0976295 8.31659 0.292893 8.70711L6.65686 15.0711C7.04738 15.4616 7.68055 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8.00001L8.07107 2.34315C8.46159 1.95263 8.46159 1.31946 8.07107 0.928937C7.68054 0.538413 7.04738 0.538413 6.65685 0.928937L0.292892 7.2929ZM33 7L1 7.00001L1 9.00001L33 9L33 7Z"
          fill="black"
        />
      </svg>

      <svg
        className={`guideline-page__arrow guideline-page__arrow--right hvr-forward`}
        width="33"
        height="16"
        viewBox="0 0 33 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.7071 8.70711C33.0976 8.31659 33.0976 7.68342 32.7071 7.2929L26.3431 0.928937C25.9526 0.538412 25.3195 0.538412 24.9289 0.928937C24.5384 1.31946 24.5384 1.95263 24.9289 2.34315L30.5858 8.00001L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM-1.74846e-07 9L32 9.00001L32 7.00001L1.74846e-07 7L-1.74846e-07 9Z"
          fill="black"
        />
      </svg>
      <h1 className={`guideline-page__title`}>{title}</h1>

      <div className={`guideline-page__content`}>
        {tags &&
          tags.map((tag, index) => {
            return <p key={`tag-${index}`}>{tag}</p>;
          })}

        <p></p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
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
