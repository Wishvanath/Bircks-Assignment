
import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import Home from './views/home';
import Login from './views/login';
import Orders from './views/order';

const Routes =() => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path ="/" component ={Home} />
                <Route exact path = "/login" component = {Login} />
                <Route exact path = "/Orders" component = {Orders} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;