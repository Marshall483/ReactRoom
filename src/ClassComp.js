import React, { Component } from 'react';
import First from './Fscomponent.js'
import Second from './SecondFsComp.js'

// import { Button } from '@material-ui/core';
// import './styles.css';

export default class ClassComp extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            inputValue: 'Default Value'
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

        this.setState({
            inputValue: event.target.value
        })
    }

    render()
    {
        return(
            <div>

                <First 
                    input={this.state.inputValue}
                    handleChange={this.handleChange} />

                <Second 
                    input={this.state.inputValue} />

            </div>
        )
   
    }
}