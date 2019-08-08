import React from 'react';
import styled from 'styled-components';

const StyledStdButton = styled.button`
    background-color: lightblue;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    padding: 5px 10px;

    &:hover {
        background-color: darkblue;
        transition: 500ms ease;
    }
`

const StdButton = ({children, click, ...props}) => (
    <StyledStdButton {...props}>
        {children}
    </StyledStdButton>
)

export default StdButton;