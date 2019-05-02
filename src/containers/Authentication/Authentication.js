/**
 * Created by mymac on 01/05/19.
 */
import React, {Component} from 'react';
import Login from '../../components/Login';
import Registration from '../../components/Registration'
import {Switch, Route, withRouter, Link} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../../actions";

import './style.scss'


class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            err: null
        };
        this.subRouter = this.subRouter.bind(this);
    }

    render() {
        const {match, location, err, routeChanged} = this.props;
        return (
            <div className="auth-wrapper">
                <div className="auth">
                    {this.subRouter()}
                </div>
                {location.pathname !== '/auth/register' ? <Link to={`${match.url}/register`} onClick={routeChanged}>Register</Link> :
                    <Link to={`${match.url}/login`} onClick={routeChanged}>Login</Link>}
                {<p>{err}</p>}
            </div>
        )
    }

    subRouter() {

        /*
         * Login and Registration components are wrapped into single
         * container but with different sub routes
         * */
        const {props} = this;
        return (
            <Switch>
                <Route exact path={`${props.match.url}/`}
                       render={(prop)=><Login onSubmit={props.loginUserRequest}/>}/>
                <Route path={`${props.match.url}/login`}
                       render={(prop)=><Login onSubmit={props.loginUserRequest}/>}/>
                <Route path={`${props.match.url}/register`}
                       render={(prop)=><Registration onSubmit={props.registerUserRequest}/>}/>
                <Route path="*" render={(prop)=><Login onSubmit={props.loginUserRequest}/>}/>
            </Switch>
        )
    }
}

function mapStateToProps(state) {
    return {
        err: state.err
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginUserRequest: bindActionCreators(actions.loginUserRequest, dispatch),
        registerUserRequest: bindActionCreators(actions.registerUserRequest, dispatch),
        routeChanged: bindActionCreators(actions.routeChange, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Authentication));