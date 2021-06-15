import React, { useState } from 'react';
import { Title, ButtonsContainer, Result } from './styledComponents'


function IncrementBar() {

    const [increment, setIncrement] = useState(0)

    const add = (incrementer) => {
        setIncrement(increment + incrementer)
    }

    return (
        <div>
            <Title>
                Multiple counter app
            </Title>
            <Result>Result: {increment}</Result>
            <ButtonsContainer>
                <button onClick={() => add(1)} >+1</button>
                <button onClick={() => add(5)}>+5</button>
                <button onClick={() => add(10)}>+10</button>
                <button onClick={() => add(100)}>+100</button>
                <button onClick={() => setIncrement(0)}>Reset sum</button>
            </ButtonsContainer>
        </div>
    )
}

export default IncrementBar