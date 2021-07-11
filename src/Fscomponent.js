import React, { Component } from 'react';

export default class First extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Button pressed.'
        }
    }
    
    render(){
        return (

            <div>

                <button 
                    value="Push"
                    onClick={() => {this.props.undateData(this.state.name)}} />

            </div>

        )
    }
}
