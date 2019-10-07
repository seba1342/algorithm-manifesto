import React from "react";
import { Link } from "gatsby";

const Guideline = ({ node }) => {
  const { title } = node.frontmatter;
  const { slug } = node.fields;
  return (
    <Link to={slug}>
      <h1>{title}</h1>
    </Link>
  );
};

export default Guideline;
