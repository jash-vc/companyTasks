import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
export default class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      pwd: "",
      cpwd: "",
      select: "free",
      gender: "male",
      checkboxValue: true,
      hidden: true, // Password type
      hide: true, // Button Value change
      formData: "", // Store data on submit
      showData: false, // Show data on table
      error: {
        fnameError: "",
        lnameError: "",
        pwdError: "",
        cpwdError: "",
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }
  toggleShow(event) {
    this.setState({ hidden: !this.state.hidden });
    this.setState({ hide: !this.state.hide });
    event.preventDefault();
  }
  handleInputChange(event) {
    const { name, value } = event.target; // Use of spread Operator
    this.setState({
      [name]: value,
    });
    switch (name) {
      case "fname":
        if (value === "") {
          this.setState({
            ...this.state,
            error: {
              ...this.state.error,
              fnameError: "First Name Shouldn't be empty",
            },
          });
        } else {
          this.setState({
            ...this.state,
            error: {
              ...this.state.error,
              fnameError: "",
            },
          });
        }
        this.setState({ fname: value });

        break;
      case "lname":
        if (value === "") {
          this.setState({
            ...this.state,
            error: {
              ...this.state.error,
              lnameError: "Last Name Shouldn't be empty",
            },
          });
        } else {
          this.setState({
            ...this.state,
            error: {
              ...this.state.error,
              lnameError: "",
            },
          });
        }
        this.setState({ lname: value });
        break;
      case "pwd":
        if (value === "") {
          this.setState({
            ...this.state,
            error: {
              ...this.state.error,
              pwdError: "password should not be empty",
            },
          });
        } else {
          this.setState({
            ...this.state,
            error: {
              ...this.state.error,
              pwdError: "",
            },
          });
        }
        this.setState({ pwd: value });
        break;
      case "cpwd":
        if (value !== this.state.pwd) {
          this.setState({
            ...this.state,
            error: {
              ...this.state.error,
              cpwdError: "Password is not the same",
            },
          });
        } else {
          this.setState({
            ...this.state,
            error: {
              ...this.state.error,
              cpwdError: "",
            },
          });
        }
        this.setState({ cpwd: value });
        break;
    }
  }
  fetchData(event) {
    let Data = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      pwd: this.state.pwd,
      gender: this.state.gender,
      select: this.state.select,
      agree: this.state.checkboxValue,
    };
    this.setState({ formData: Data });
    this.setState({ showData: !this.state.showData });
    event.preventDefault();
  }
  render() {
    const table = (
      <table width="100%">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Gender</th>
          <th>Plan</th>
        </tr>
        <tr>
          <td>{this.state.formData.fname}</td>
          <td>{this.state.formData.lname}</td>
          <td>{this.state.formData.email}</td>
          <td>{this.state.formData.pwd}</td>
          <td>{this.state.formData.gender}</td>
          <td>{this.state.formData.select}</td>
        </tr>
      </table>
    );
    console.log(this.state.formData);
    return (
      <>
        <Form className="validationForm" onSubmit={this.fetchData}>
          <FormGroup>
            <Label>First Name</Label>

            <Input
              type="text"
              name="fname"
              checked={this.state.fnameValue}
              onChange={this.handleInputChange}
            />
            <p>{this.state.error.fnameError}</p>
          </FormGroup>
          <FormGroup>
            <Label>Last Name</Label>

            <Input
              type="text"
              name="lname"
              value={this.state.lnameValue}
              onChange={this.handleInputChange}
            />
            <p>{this.state.error.lnameError}</p>
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>

            <Input
              name="email"
              type="email"
              value={this.state.emailValue}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup className="showPassword">
            <Label>Enter Password</Label>

            <Input
              name="pwd"
              type={this.state.hidden ? "password" : "text"}
              value={this.state.pwdValue}
              onChange={this.handleInputChange}
            />
            <button onClick={this.toggleShow}>
              {this.state.hide ? "Show" : "Hide"}
            </button>
            <p>{this.state.error.pwdError}</p>
          </FormGroup>
          <FormGroup>
            <Label>Confirm Password</Label>

            <Input
              name="cpwd"
              type="password"
              value={this.state.cpwdValue}
              onChange={this.handleInputChange}
            />
            <p>{this.state.error.cpwdError}</p>
          </FormGroup>
          <FormGroup>
            <Label>Select Plan</Label>
            <Input
              type="select"
              value={this.state.selectValue}
              onChange={this.handleInputChange}
              name="select"
            >
              <option selected value="free">
                Free
              </option>
              <option value="monthly">Monthly</option>
              <option value="annually">Annually</option>
            </Input>
          </FormGroup>
          <FormGroup tag="fieldset" className="radio">
            <Label>Gender</Label>
            <FormGroup>
              <Label>
                <Input
                  type="radio"
                  name="gender"
                  value={this.state.gender}
                  onChange={this.handleInputChange}
                />
                Male
              </Label>
              <Label>
                <Input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={this.handleInputChange}
                />
                Female
              </Label>
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <Label>
              <Input
                type="checkbox"
                name="terms"
                value={this.state.checkboxValue}
                onChange={this.handleInputChange}
              />
              &nbsp; I accept Terms and Conditions
            </Label>
          </FormGroup>
          <Input type="submit" value="Submit" />
        </Form>
        <div>{this.state.showData && table}</div>
      </>
    );
  }
}
