import React from 'react';
import styled from 'styled-components';
import RouterLink from '../../shared/components/link';
import Register from '../register/register';
import Login from '../login/login';
import { Link } from 'react-router-dom';
import StdButton from '../../shared/components/buttons/std-btn'
import axiosClient from '../../configs/axios-configs';
import { useCookies } from 'react-cookie';

const StyledMainContainer = styled.div`
    border-radius: 8px;
    border: lightgray 1px solid;
    padding: 20px;
    margin: 20px auto;
`

const Main = () => {
    const [data, setData] = React.useState({});
    const [cookies, setCookies] = useCookies();

    const getData = () => {
        console.log(cookies.jwt)
        const jwt = cookies.jwt;
        axiosClient.get('/data', {
            headers: {
                Cookie: `jwt=${jwt}`
            }
        }).then(res => {
            console.log(res)
            setData(res.body)
            console.log(data);
        })
            .catch(e => console.log(e))
    }

    const logout = () => {
        // axiosClient.get('/auth/logout',{headers: {
        //     Cookie: `jwt=${}`
        // }}).then(res => {
        //     console.log(data)
        // })
    }

    return (
        <StyledMainContainer>
            {/* <Link to={Register}>reg</Link> */}
            <RouterLink to="/register">Register</RouterLink>
            {/* <RouterLink to={Login}>Login</RouterLink> */}
            <StdButton onClick={getData}>Get Data</StdButton>
            <StdButton onClick={logout}>logout</StdButton>
        </StyledMainContainer>
    )
}

export default Main;