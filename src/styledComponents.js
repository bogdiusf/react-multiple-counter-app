import styled from 'styled-components'

const Title = styled.div`
    font-size: 35px;
    position: absolute;
    left: 50%;
    top: 5%;
    transform: translate(-50%);
    background-color: rgba(255,0,0,0.2);
    padding: 20px;
    border-radius: 20px;
    border: 2px solid rgba(0,0,255, 0.4)
`;

const ButtonsContainer = styled.div`
    font-size: 20px;
    position: absolute;
    left: 50%;
    top: 35%;
    transform: translate(-50%, 35%);
    display: flex;
    gap: 12px;
    flex-direction: row;
    align-content: space-between;
    padding: 40px;
    border: 2px solid black;
    border-radius: 5px;

    > * {
        font-size: 30px;
        width: fit-content;
        height: fit-content;
    }

`;

const Result = styled.div`
    position: absolute;
    margin-top: 13%;
    left: 50%;
    transform: translate(-50%);
    padding: 20px;
    font-size: 25px;
    background-color: yellow;
    width: 300px;
    text-align: center;
    border: 2px solid lightgreen;
    border-radius: 5px;
`;

export { Title, ButtonsContainer, Result }