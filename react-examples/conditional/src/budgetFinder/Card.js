import React, { Component } from "react";
export default class Card extends Component {
  render() {
    const name = this.props.name;
    const value = this.props.value;
    return (
      <div className="bg-info col-md-3 p-3 rounded d-flex align-items-center justify-content-center">
        <label className="text-white pe-3">{name}</label>
        <span className="text-white fbold flarge">{value}</span>
      </div>
    );
  }
}
