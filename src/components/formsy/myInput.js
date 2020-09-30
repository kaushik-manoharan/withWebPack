/** @format */

import { withFormsy } from "formsy-react";

import React from "react";
class MyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changeHandler = this.changeHandler.bind(this);
  }
  changeHandler(e) {
    const { name, value } = e.target;
    this.props.setValue(e.target.value);
  }
  render() {
    const errormsg = this.props.errorMessage;
    return (
      <>
        <input
          onChange={this.changeHandler}
          type="text"
          value={this.props.value || ""}
          title={errormsg ? errormsg : "all good!"}
        />
        <span>{errormsg}</span>
      </>
    );
  }
}
export default withFormsy(MyInput);
