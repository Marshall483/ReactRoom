import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './Home.js'
import Users from './Users.js';
import About from './About.js';

// import First from './Fscomponent.js'
// import Second from './SecondFsComp.js'

// import { Button } from '@material-ui/core';
// import './styles.css';

export default class ClassComp extends Component {

    constructor(props) {
        super(props);
    
        this.state = {

        }

    }

    render()
    {
        return(
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li> <Link to="/">Home</Link></li>
                            <li> <Link to="/about">About</Link></li>
                            <li> <Link to="/users">Users</Link></li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/About"> <About /> </Route>
                        <Route path="/Users"> <Users /> </Route>
                        <Route path="/"> <Home /> </Route>
                    </Switch>

                </div>
            </Router>
        );
    }
}