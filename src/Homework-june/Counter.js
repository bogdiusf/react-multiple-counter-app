import React from 'react';
import './style.css'

export default function Counter(props) {
    return (
        <div className="counter">Result: {props.result}</div>
    )
}