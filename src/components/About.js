import React, { useState } from "react";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import "../styles/components/About.css";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalActive: false };
  }

  aboutContainerRef = React.createRef();
  aboutContentRef = React.createRef();

  componentDidMount(){
    this.addClickListeners();
    this.addKeyListeners();


  }

  //
  // Listeners

  addClickListeners = () => {
    document.addEventListener(`click`, event => {
      if(this.state.isModalActive) {
        console.log(event);
      }
    });
  }

  addKeyListeners = () =>{
    document.addEventListener(`keyup`, event => {
      switch (event.keyCode) {
        case 27:
          if(this.state.isModalActive) {
            this.setState({
              isModalActive: !this.state.isModalActive,
            });
            clearAllBodyScrollLocks();
          }
          break;

        default:
          break;
      }
    });
  }

  //
  // Functions

  handleModalClick = () => {
    this.setState({
      isModalActive: !this.state.isModalActive,
    });
  }

  render() {
    const aboutContentElement = this.aboutContentRef.current;

    if (this.state.isModalActive) {
      disableBodyScroll(aboutContentElement);
    } else {
      clearAllBodyScrollLocks();
    }

    return (
      <>
        <div
          className="header__link header__link__item"
          onClick={this.handleModalClick}
        >
          {this.state.isModalActive ? 'x' : '?'}
        </div>
        { this.state.isModalActive && (
          <div ref={this.aboutContainerRef} className="about">
            <div ref={this.aboutContentRef} className="about__content">
              <p>
                This website's goal is to raise awareness. The vast majority of us
                rely on algorithms to source our news and information - whether that
                be news about family, friends or the world around us.
              </p>
              <p>
                It is important to realise that this information is curated, and
                served to us in a way that will align to our interests. And
                sometimes that is a good thing. But sometimes it can surround us in
                a cocoon without us even knowing. This cocoon has many names such as
                confirmation bias or echo chambers. Places where our information is
                aligned to a common understanding and any deviation from that idea
                is treated as blasphemy.
              </p>
              <p>
                In a world where information is the most accessible it has ever been
                we need to equip ourselves with the tools to seek fact. This means
                understanding that algorithms have been designed to serve us
                information that we want to hear. The easiest way to combat this
                cocoon is simply being aware. Understand that the information being
                presented to you is also being presented for you. Purposefully
                search for opposing points of view. Use other sources of information
                such as friends, libraries and academics. Follow people who
                challenge your perspectives. Engage in conversations with them and
                may you'll teach and learn something.
              </p>
              <p>
                Enjoy the convenience that algorithms provide, while also being
                aware that the things they provide may not be the entire truth.
              </p>
            </div>
          </div>
        )}
      </>
    );
  }
};

export default About;
