import React, { Component } from 'react';

export default class Second extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             

        }
    }
    
    render(){
        return (

            <div>

                <h1>Second</h1>
                
                <p>{this.props.input}</p>

            </div>

        )
    }
}
