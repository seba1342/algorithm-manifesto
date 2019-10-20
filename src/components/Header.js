import React from "react";
import { graphql, Link, StaticQuery } from "gatsby";

import "../styles/Header.css";

export default () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header className="header">
        <Link to={`/`} className="header__link">
          <h1 className="header__title">{data.site.siteMetadata.title}</h1>
        </Link>
      </header>
    )}
  />
);
