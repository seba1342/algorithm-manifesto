import React, { ReactDOM, useRef, useState, useEffect } from "react";
import { Link } from "gatsby";
import Ticker from "react-ticker";

import "./Guideline.css";

class Guideline extends React.Component {
  constructor(props) {
    super(props);
    this.tickerRef = React.createRef();
  }

  componentDidMount() {
    // const [hoverRef, isHovered] = useHover();
    console.log(this.tickerRef.current);

    // if (this.tickerRef.current) {
    //   this.tickerRef.current.state.elements[0].addEventListener(`click`, this);
    // }
  }

  render() {
    const { title } = this.props.node.frontmatter;
    const { slug } = this.props.node.fields;
    return (
      <Ticker ref={this.tickerRef} move={true} speed={10}>
        {() => (
          <Link className={`link`} to={slug}>
            <div className={`link__item`}>
              <h1>{title}</h1>
            </div>
          </Link>
        )}
      </Ticker>
    );
  }
}

export default Guideline;
