/** @format */

import { hot } from "react-hot-loader/root";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./components/homepage";
import Faculty from "./components/faculty";
import Courses from "./components/courses";
import Schools from "./components/schools";
import FormsyData from "./components/formsy/data";
import FormsyForm from "./components/formsy/form";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={HomePage} />
          <Route path="/faculty" component={Faculty} />
          <Route path="/course" component={Courses} />
          <Route path="/formsy/form" component={FormsyForm} />
          <Route path="/formsy/data" component={FormsyData} />
          <Route path="/school/:id" component={Schools} />

          <Route exact path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default hot(App);
