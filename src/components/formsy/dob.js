/** @format */

import React from "react";

import MyInput from "./myInput";

export default function DOBComponent() {
  return (
    <>
      DOB (year-month-date):
      {/* birth day */}
      <MyInput
        name="birthYear"
        validations={{
          yearValidation: (values, value) => {
            let date = new Date();
            return value > 1900 && value < date.getFullYear()
              ? true
              : "invalid year";
          },
        }}
        required
      />
      {/* birth month */}
      <MyInput
        name="birthMonth"
        validations={{
          dobValidation: (values, value) => {
            return value > 0 && value <= 12 ? true : "invalid month";
          },
        }}
        required
      />
      {/* birth year */}
      <MyInput
        name="birthDate"
        validations={{
          dobValidation: (values, value) => {
            let leapYr = values.birthYear % 4 == 0;
            let month = values.birthMonth;
            console.log(values);
            if ((month == 1 || 3 || 5 || 7 || 8 || 10 || 12) && value <= 31) {
              return true;
            } else if ((month == 4 || 6 || 9 || 11) && value <= 30) {
              return true;
            } else if (month == 2) {
              if ((leapyr && value <= 28) || (!leapYr && value <= 29))
                return true;
            } else return "Enter your valid date of birth";
          },
        }}
        required
      />
      <br />
    </>
  );
}
