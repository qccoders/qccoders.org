import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './shared/NavBar'
import Footer from './shared/Footer'
import Home from './components/Home'
import Events from './components/Events'
import JobBoard from './components/JobBoard'
import Mission from './components/Mission'
import NotFound from './components/NotFound'

export default props => (
    <BrowserRouter>
        <div>
            <NavBar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/events' component={Events} />
                <Route path='/job-board' component={JobBoard} />
                <Route path='/mission' component={Mission} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
)