import React, { Component } from "react";
import RCG from "react-captcha-generator";

class Captcha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      captcha: "",
      input: "",
      error: "",
    };
  }

  result = (text) => {
    this.setState({
      captcha: text,
    });
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { captcha, input } = this.state;
    if (captcha === input) {
      this.setState({ error: "" });
      alert("Captcha Correct");
    } else {
      this.setState({ error: "Captcha Incorrect" });
    }
  };

  render() {
    const { error } = this.state;

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="captcha-input"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <RCG result={this.result} />
      </div>
    );
  }
}

export default Captcha;
