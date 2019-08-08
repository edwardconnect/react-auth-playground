import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import axiosClient from '../../configs/axios-configs';
import FormInput from '../../shared/components/input-fields/form-input';
import { validateEmail, validatePassword } from '../../shared/form-validations';
import StdButton from '../../shared/components/buttons/std-btn';

const Register = () => {
    const [formData, setFormData] = React.useState({ username: '1', password: '' })

    const handleSubmission = (values) => {
        console.log(formData);
        console.log(values)
        setFormData({username: values.username, password: values.password});
        console.log(formData)
        // axiosClient.post('/register', formData)
        //     .then(res => {
        //         console.log(res);
        //         setFormData({ username: '', password: '' });
        //     })
        //     .catch(e => console.error(e));
    }
    
    const facebookRegister = () => {
        // axiosClient.get(`/auth/facebook?redirectUrl=${window.location.href}`);
        window.open(`http://localhost:3000/auth/facebook?redirectUrl=${window.location.href}`, "_self");
    }

    return (
        <>
            <StdButton onClick={facebookRegister}>Facebook login</StdButton>
            <Formik
                initialValues={formData}
            enableReinitialize={true}
                onSubmit={values => handleSubmission(values)}
                render={({ values }) =>{ 
                    console.log(values)
                    return(
                    <Form>
                        <Field name="username"  type="text" component={FormInput} validate={validateEmail} />
                        <Field name="password"  type="password" component={FormInput} validate={validatePassword} />
                        <StdButton type="submit">Register</StdButton>
                        <button type="submit">asdf</button>
                    </Form>
                )}}
            />
        </>
    )
}

export default Register;