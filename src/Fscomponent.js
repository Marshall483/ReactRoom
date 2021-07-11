import React from 'react'

export default function Fscomponent(props) {
    return (
        <div>
            <h1>Hello, {props.Name}</h1>
        </div>
    )
}

Fscomponent.defaultProps = { Name: "Anna" }