import React, { Component } from 'react';
// import First from './Fscomponent.js'
// import Second from './SecondFsComp.js'

// import { Button } from '@material-ui/core';
// import './styles.css';

export default class ClassComp extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }

    }

    componentDidMount(){
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink")
        .then(res => res.json())
        .then(
            (res) => {
                this.setState({
                    items: res.drinks,
                    isLoaded: true
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render()
    {
        const {error, isLoaded, items} = this.state;

        if(error){
            return(<p>{error.message}.</p>)
        }
        else if (!isLoaded){
            return(<p>Loading was failed.</p>)
        }
        else{
            return(
                <ul>
                    {items.map( (item) => (
                        <li key={item.name}>
                            {item.strDrink}
                            <img height="64" width="64" alt="SexyDrink" src={item.strDrinkThumb} />
                        </li>
                    ))}
                </ul>
            )
        }
    }
}