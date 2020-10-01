/** @format */

import Formsy from "formsy-react";
import React from "react";
import Navigation from "../utils/navbar";
import DOBComponent from "./dob";
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
    console.log(model);
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
          Name:{" "}
          <MyInput
            name="name"
            validations={{
              minLength: 3,
            }}
            validationError="Minimum 3 characters"
            required
          />
          <br />
          Your city:{" "}
          <MyInput
            name="location"
            validationError="This is required"
            required
          />
          <br />
          Phone:{" "}
          <MyInput
            name="phone"
            validations={{
              isNumeric: true,
              isLength: 10,
            }} //comes wiht formsy
            validationError="Need 10 digits for your phone number"
            required
          />
          <br />
          {/* DOB - custom validation */}
          <DOBComponent />
          {/*  */}
          Email:{" "}
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
