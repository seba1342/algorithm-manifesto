import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

import "../styles/pages/about.css";

const AboutPage = props => {
  return (
    <Layout>
      <div className="about" style={{ paddingTop: 50 }}>
        <div className="about__content">
          <p>
            This website's goal is to raise awareness about the ways in which
            algorithms curate all the content we consume online. The vast
            majority of us rely on algorithms to source our news and information
            - whether that be news about family, friends or the world around us.
          </p>
          <p>
            It is important to realise that this information is curated, and
            served to us in a way that will align to our interests. Sometimes
            that is a good thing. But sometimes it can surround us in a cocoon
            without our knowledge. This cocoon has many names such as
            confirmation bias or an echo chamber. Places where the information
            is aligned to our understandings and interests, with any deviation
            treated as blasphemy.
          </p>
          <p>
            In a world where information is the most accessible it has ever been
            we need to equip ourselves with the tools to seek fact. This means
            understanding that algorithms have been designed to serve us
            information that we want to hear, see or read. The easiest way to
            combat this cocoon is by simply being aware. Understand that the
            information being presented to you is also being presented for you.
            Purposefully search for opposing points of view. Use other sources
            of information such as friends, libraries and academics. Follow
            people who challenge your perspectives. Engage in conversations with
            them and maybe you'll teach and learn something that changes your
            perspecitve.
          </p>
          <p>
            Enjoy the convenience that algorithms provide, while also being
            aware that the things they provide may not be the entire truth.
          </p>
          <Link to={`/`} style={{ color: `black` }}>
            View guidelines
          </Link>
          .
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
