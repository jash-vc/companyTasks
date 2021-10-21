import React, { Component } from "react";
import { Button } from "reactstrap";
import AddExpanse from "./AddExpanse";
import Card from "./Card";

export default class Budget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 5000,
      effective: 5000,
      data: 0,
      expanse: 0,
      arr: [],
      name: "",
      ledger: [],
      isBoxVisible: false,
    };
    this.handleAddData = this.handleAddData.bind(this);
    this.storeSubmit = this.storeSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleBox = this.toggleBox.bind(this);
  }
  handleAddData(data) {
    this.setState({ data });
  }
  handleName(name) {
    this.setState({ name });
  }
  storeSubmit() {
    let { arr } = this.state;
    let curExpanse = Number(this.state.data);
    arr.push(curExpanse);
    this.setState({ arr: arr });
    this.setState({
      ...this.state,
      effective: this.state.effective - curExpanse,
    });
    let sum = arr.reduce((curr, index) => curr + index);
    this.setState({ expanse: sum });
    // let expanseCost = this.state.expanse;
    // this.setState({ expanse: expanseCost });

    let entry = {
      id: this.state.ledger.length,
      name: this.state.name,
      cost: this.state.data,
    };
    this.setState({ ledger: [...this.state.ledger, entry] });
  }
  handleRemove(id) {
    const ledger = [...this.state.ledger];
    let removedCost = ledger[id].cost;
    ledger.splice(id, 1);
    let arr = this.state.arr;
    arr.splice(id, 1);
    this.setState({
      ...this.state,
      ledger: ledger,
      arr: arr,
      effective: +this.state.effective + +removedCost,
      expanse: +this.state.expanse - +removedCost,
    });
    console.log(this.state.ledger);
  }
  toggleBox = () => {
    this.setState((prevState) => ({ isBoxVisible: !prevState.isBoxVisible }));
  };
  render() {
    // console.log(this.state);
    const { isBoxVisible } = this.state;
    const data = this.state.data;
    const expanseName = this.state.name;
    return (
      <>
        <div className="container">
          <h1>My Budget Planner</h1>
          <div className="row mb-2 d-flex justify-content-md-between">
            <Card name="Total Budget" value={this.state.total} />
            <Card name="Effective Balance" value={this.state.effective} />
            <Card name="Expanses" value={this.state.expanse} />
          </div>
          <ul>
            {this.state.ledger.map((item) => (
              <li key={item.id}>
                <span className="me-5 w-25">{item.name}</span>
                <span className="me-5 w-25">{item.cost}</span>

                {/*  Use arrow function if you call function by it's name then it simply calls it */}
                <Button
                  className="btn btn-danger rounded w-25 text-white"
                  onClick={() => {
                    this.handleRemove(item.id);
                  }}
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
          <AddExpanse
            data={data}
            name={expanseName}
            onValueChange={this.handleAddData}
            submitData={this.storeSubmit}
            onNameChange={this.handleName}
          />
        </div>
        <button onClick={this.toggleBox}>Show Box</button>
        <div className={`box ${isBoxVisible ? "hhhhh" : null}`}>
          <p>I'm the box</p>
        </div>
      </>
    );
  }
}
