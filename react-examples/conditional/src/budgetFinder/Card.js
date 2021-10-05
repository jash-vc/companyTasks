import React, { Component } from "react";
export default class Card extends Component {
  render() {
    const name = this.props.name;
    const value = this.props.value;
    return (
      <div className="bg-info col-md-3 p-3 rounded">
        <label className="text-white pe-3">{name}</label>
        <span className="text-white">{value}</span>
      </div>
    );
  }
}
