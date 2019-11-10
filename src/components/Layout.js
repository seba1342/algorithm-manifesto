import React from "react";
import Header from "../components/Header";
import Transition from "../components/Transition";
import SEO from "../components/SEO";

import "../styles/components/Layout.css";

export default ({ children, location }) => {
  return (
    <>
      <SEO />
      <Header />
      <Transition location={location}>{children}</Transition>
    </>
  );
};
