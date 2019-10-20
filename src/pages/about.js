import React from "react";

import Header from "../components/Header.js";

import "../styles/about.css";

const Layout = props => {
  return (
    <div>
      <Header />
      <div className="about" style={{ paddingTop: 50 }}>
        <div className="about__content">
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
    </div>
  );
};

export default Layout;
