import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter, Redirect, Route ,Switch} from 'react-router-dom';
import HomePage from './components/homepage';
import Faculty from './components/faculty'
import Courses from './components/courses';
import Schools from './components/schools';

function App() {
    return (
        <>
         <BrowserRouter>
            <Switch>
                <Route exact path='/'><Redirect to='/home'/></Route>
                <Route exact path='/home' component={HomePage}/>
                <Route exact path='/faculty' component={Faculty}/>
                <Route exact path='/course' component={Courses}/>
                <Route path='/school/:id' component={Schools} />
                <Route exact path='*'><Redirect to='/home'/></Route>
            </Switch>            
        </BrowserRouter>
        </>
    );
}
export default hot(App);