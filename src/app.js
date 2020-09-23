import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import HomePage from './components/homepage';
import Faculty from './components/faculty'
import Courses from './components/courses';
import Schools from './components/schools';

function App() {
    return (
        <>
         <BrowserRouter>
            <Route exact path='/'><Redirect to='/home'/></Route>
            <Route path='/home'><HomePage/></Route>
            <Route path='/faculty'><Faculty/></Route>
            <Route path='/course'><Courses/></Route>
            <Route path='/school/:id'><Schools/></Route>
            <Route><Redirect to='/home'/></Route>
        </BrowserRouter>
        </>
    );
}
export default hot(App);