/** @format */

import Formsy from "formsy-react";
/** @format */

import React from "react";
import Navigation from "../utils/navbar";
import MyInput from "./myInput";
class FormsyForm extends React.Component {
  constructor(props) {
    super(props);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.state = { canSubmit: false };
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  submit(model) {
    fetch("http://example.com/", {
      method: "post",
      body: JSON.stringify(model),
    });
  }

  render() {
    const errormsg = this.props.errorMessage;
    return (
      //name, location, email ,
      <>
        <Navigation />
        <Formsy
          onValidSubmit={this.submit}
          onValid={this.enableButton}
          onInvalid={this.disableButton}
        >
          <MyInput
            name="name"
            validations={{
              minLength: 3,
            }}
            validationError="Minimum 3 characters"
            required
          />
          <br />
          <MyInput
            name="location"
            validationError="This is required"
            required
          />
          <br />
          <MyInput
            name="name"
            validations={{
              isNumeric: true,
              isLength: 10,
            }} //comes wiht formsy
            validationError="Need 10 digits for your phone number"
            required
          />
          <br />
          <MyInput
            name="email"
            validations="isEmail"
            validationError="Enter your valid email id"
            required
          />
          <br />
          <button type="submit" disabled={!this.state.canSubmit}>
            Submit
          </button>
        </Formsy>
      </>
    );
  }
}
export default FormsyForm;
