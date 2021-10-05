import React, { Component } from "react";

export default class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = { heading: "I am Zero" };
    this.click = this.click.bind(this);
  }
  componentDidMount() {
    this.setState({ heading: "i am mounted" });
  }
  click() {
    this.setState({ heading: "i am Clicked" });
  }
  render() {
    return (
      <div>
        <h2 onClick={this.click}>{this.state.heading}</h2>
      </div>
    );
  }
}
Heading.defaultProps = {
  heading: "I am Default",
};
