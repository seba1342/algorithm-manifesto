import React from "react";
import { Link } from "gatsby";
import Ticker from "react-ticker";

import "../styles/components/Guideline.css";

const Guideline = props => {
  const { title } = props.node.frontmatter;
  const { slug } = props.node.fields;

  return (
    <Link className="link" to={slug}>
      <Ticker className="ticker" speed={Math.random() * 5 + 10}>
        {() => (
          <div className="link__item">
            <h1 className="ticker__title">{title}</h1>
          </div>
        )}
      </Ticker>
    </Link>
  );
};

export default Guideline;
