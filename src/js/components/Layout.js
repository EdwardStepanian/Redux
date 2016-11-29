import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  static proptypes = {
    title: "Welcome",
    name : 'Pigh'
  }

  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

