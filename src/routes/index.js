import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from "../components/Home"
import About from "../components/About"

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
