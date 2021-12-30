import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false,
      name: "",
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      valid: true,
    });
  }
  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }
  render() {
    return (
      <div className="App">
        <Header />
        {this.state.valid ? (
          <h4>
            Welcome <span>{this.state.name} </span>
            your email is <span> {this.state.email}.</span>
          </h4>
        ) : (
          <Form
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        )}
      </div>
    );
  }
}
