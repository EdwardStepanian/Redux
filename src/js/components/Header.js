import React from "react";
import Title from "./Header/Title";

export default class Header extends React.Component {

  static defaultProps = {
    title : 'Welcome',
    name : 'default'
  }
  render() {
    return (
      <div>
        <Title title={this.props.title} name = 'Lorem' />
      </div>
    );
  }
}
