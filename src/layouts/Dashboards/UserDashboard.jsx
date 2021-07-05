import React from 'react'
import { Route } from 'react-router';
import Home from "../../pages/Home/Home";
import SignPage from '../../pages/SignPage/SignPage'

export default function UserDashboard() {
    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/sign" component={SignPage} />
        </div>
    )
}
