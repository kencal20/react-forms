import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      gender: "",
      phonenumber: "",
      radio: "",
    };
    this.handleChange = (e) => {
      this.setState = { [e.target.firstname]: e.target.value };
      this.setState = { [e.target.lastname]: e.target.value };
    };
    this.Submit = (e) => {
      e.preventDefault();
      console.log(this.state.firstname);
      console.log(this.state.lastname);
      console.log(this.state.email);
      console.log(this.state.gender);
      console.log(this.state.phonenumber);
      console.log(this.state.radaio);
    };
  }
  render() {
    return (
      <form onSubmit={this.Submit}>
        <div className="fillings">
          <label>First Name </label>
          <br />
          <input
            type="text"
            name="firstname"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </div>
        <div className="fillings">
          <label>Last Name</label>
          <br />
          <input
            type="text"
            name="lastname"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </div>
        <div className="fillings">
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </div>
        <div className="fillings">
          <label>Phone Number</label>
          <br />
          <input
            type="tel"
            name="phonenumber"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </div>
        <div className="radio">
          <label>Phone Number</label>
          <br />
          <input type="radio" name="yourself" value="Yourself"></input>
          <br></br>
        </div>
        <button type="submit" name="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
