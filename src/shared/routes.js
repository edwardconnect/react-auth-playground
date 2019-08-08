import React from 'react';
import Main from '../entities/main/main';
import Login from '../entities/login/login';
import Register from '../entities/register/register';
import {Switch, Route} from 'react-router-dom';

const Routes = () => (
    <Switch>
        <Route path="/" exact={true} component={Main}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
    </Switch>
)

export default Routes