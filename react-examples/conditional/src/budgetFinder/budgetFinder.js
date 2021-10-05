import React, { Component } from "react";
import AddExpanse from "./AddExpanse";
import Card from "./Card";

export default class Budget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 5000,
      data: 0,
      expanse: 0,
    };
    this.handleAddData = this.handleAddData.bind(this);
    this.storeSubmit = this.storeSubmit.bind(this);
  }
  handleAddData(data) {
    this.setState({ data });
  }
  storeSubmit(data) {
    this.setState({ ...this.state, expanse: data });
  }

  render() {
    console.log(this.state.expanse);
    const data = this.state.data;
    return (
      <>
        <div className="container">
          <h1>My Budget Planner</h1>
          <div className="row mb-2 d-flex justify-content-md-between">
            <Card name="Total Budget" value="2000" />
            <Card name="Effective Balance" />
            <Card name="Expanses" />
          </div>
          <AddExpanse
            data={data}
            onValueChange={this.handleAddData}
            submitData={this.storeSubmit}
          />
        </div>
      </>
    );
  }
}
