import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import history from './history'
import './index.css'
import App from './App'
import Term from './component/screens/term.jsx'
import * as serviceWorker from './serviceWorker'

const fakeAuth = {
    isAuthenticated: false,
    data: sessionStorage.getItem('test'),
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100)
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100)
    }
}

/*
Made private Route for inside components
1.same Route as api
2.render a route in this and props too
*/

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated === true ? <Component {...props} /> : <Redirect to='/' />
    )} />
)

ReactDOM.render(
    <Fragment>
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={App} />
                <PrivateRoute path='/term' component={Term} />
            </Switch>
        </Router>
    </Fragment>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
