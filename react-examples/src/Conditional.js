import React, { Component } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default class Conditional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "",
      contact: "",
      status: "accept",
      show: false,
      formData: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    let Data = {
      fname: this.state.id,
      lname: this.state.name,
      contact: this.state.contact,
      status: this.state.status,
    };
    console.log(Data.status);
    if (Data.status === "pending") {
      const actionDecline = <button className="btn btn-danger">Decline</button>;
      const actionAccept = (
        <button className="btn btn-success m10">Accept</button>
      );
      const Wrapper = (
        <>
          {actionAccept}
          {actionDecline}
        </>
      );
      Data.action = Wrapper;
    } else if (Data.status === "accept") {
      Data.action = "Accepted";
    } else {
      Data.action = "Declined";
    }
    delete Data.status;
    this.setState({ formData: this.state.formData.concat(Data) });
    event.preventDefault();
  }
  render() {
    return (
      <>
        <Form className="validationForm" onSubmit={this.handleSubmit}>
          <FormGroup className="d-flex align-items-center pb-2">
            <Label className="widthLabel">Id</Label>
            <Input
              type="number"
              name="id"
              value={this.state.id}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center pb-2">
            <Label className="widthLabel">Name</Label>
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center pb-2">
            <Label className="widthLabel">Contact No</Label>
            <Input
              type="text"
              name="contact"
              value={this.state.contact}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center pb-2">
            <Label className="widthLabel">Status</Label>
            <Input
              type="select"
              value={this.state.status}
              onChange={this.handleChange}
              name="status"
            >
              <option selected value="accept">
                Accept
              </option>
              <option value="pending">Pending</option>
              <option value="declined">Declined</option>
            </Input>
          </FormGroup>
          <Input type="submit" value="Submit" />
        </Form>
        <table>
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {this.state.formData.map((item) => (
              <tr key={item.id}>
                {Object.values(item).map((val) => (
                  <td>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
