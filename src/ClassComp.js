import React, { Component } from 'react';
import First from './Fscomponent.js'
// import Second from './SecondFsComp.js'

// import { Button } from '@material-ui/core';
// import './styles.css';

export default class ClassComp extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            name: 'Button not pressed.'
        }

        this.onPress = this.onPress.bind(this);
    }

    onPress = (value) => {
        this.setState({
            name: value
        })
    }

    render()
    {
        return(
            <div>

                <p>Update {this.state.name}</p>

                <First undateData={this.onPress} />

            </div>
        )
    }
}