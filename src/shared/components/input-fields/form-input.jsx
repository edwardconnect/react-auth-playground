import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    border: 1px solid lightgray;
    border-radius: 5px;
    font-size: 16px;
    padding: 10px 15px;
`


const FormInput = ({
    field,
    form: {touched, errors},
    ...props
}) => (
    <div>
        <button onClick={() => console.log(props)} >Reset</button>
        <StyledInput {...field} {...props}/>
        {touched[field.name] && errors[field.name] && <div>{errors[field.name]}</div>}
    </div>
)

export default FormInput;