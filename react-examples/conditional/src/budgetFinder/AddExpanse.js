import React, { Component } from "react";
import { Button, FormGroup, Input } from "reactstrap";

export default class AddExpanse extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
  }

  handleChange(e) {
    this.props.onValueChange(e.target.value);
  }
  handleChangeName(e){
    this.props.onNameChange(e.target.value);
  }
  handleSubmit(e) {
    this.props.submitData(e.target.value);
  }
  render() {
    const data = this.props.data;
    const name = this.props.name;
    return (
      <>
        <h2 className="widthLabel">Add Expanse</h2>
        <FormGroup className=" d-flex">
          <Input
            type="text"
            name="expansename"
            className="w-50 me-5"
            onChange={this.handleChangeName}
            value={name}
            placeholder="e.g. Breakfast"
          />
          <Input
            type="number"
            name="cost"
            value={data}
            onChange={this.handleChange}
            className="w-50 me-5"
          />
          <Button
            className="btn btn-success rounded w-25 text-white"
            onClick={this.handleSubmit}
          >
            Save
          </Button>
        </FormGroup>
      </>
    );
  }
}
