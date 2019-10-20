import React from "react";
import { Link } from "gatsby";
import Ticker from "react-ticker";

import "../styles/Guideline.css";

const Guideline = props => {
  const { title } = props.node.frontmatter;
  const { slug } = props.node.fields;

  return (
    <Ticker className={`ticker`} speed={Math.random() * 5 + 7}>
      {() => (
        <Link className={`link`} to={slug}>
          <div className={`link__item`}>
            <h1>{title}</h1>
          </div>
        </Link>
      )}
    </Ticker>
  );
};

export default Guideline;
