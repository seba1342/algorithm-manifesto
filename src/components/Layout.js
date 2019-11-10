import React from "react";
import Header from "../components/Header";
import Transition from "../components/Transition";

import "../styles/components/Layout.css";

export default ({ children }) => {
  return (
    <div>
      <Header />
      <Transition location={location}>{children}</Transition>
    </div>
  );
};
