import React from "react";
import { Link } from "gatsby";

const Guideline = ({ frontmatter }) => {
  const { title, path } = frontmatter;
  return (
    <Link to={path}>
      <h1>{title}</h1>
    </Link>
  );
};

export default Guideline;
