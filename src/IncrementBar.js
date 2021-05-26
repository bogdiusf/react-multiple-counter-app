import React, { useState } from 'react';
import { Title, ButtonsContainer, Result } from './styledComponents'


function IncrementBar() {

    const [state, setState] = useState({
        sum: 0,
    })

    const incrementByOne = () => {
        setState({
            sum: state.sum + 1
        })

        console.log(state.sum)
    }

    const incrementByFive = () => {
        setState({
            sum: state.sum + 5
        })

        console.log(state.sum)
    }

    const incrementByTen = () => {
        setState({
            sum: state.sum + 10
        })

        console.log(state.sum)
    }

    const incrementByHundred = () => {
        setState({
            sum: state.sum + 100
        })

        console.log(state.sum)
    }

    const resetSum = () => {
        setState({ sum: 0 })
    }


    return (
        <>
            <Title>
                Multiple counter app
            </Title>
            <Result>Result: { state.sum }</Result>
            <ButtonsContainer>
                <button onClick={ incrementByOne } >+1</button>
                <button onClick={ incrementByFive }>+5</button>
                <button onClick={ incrementByTen }>+10</button>
                <button onClick={ incrementByHundred }>+100</button>
                <button onClick={ resetSum }>Reset sum</button>
            </ButtonsContainer>
        </>
    )
}

export default IncrementBar