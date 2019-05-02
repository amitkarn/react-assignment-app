/**
 * Created by mymac on 01/05/19.
 */
import React, {Component} from 'react';
import {Switch, Route, withRouter, Link} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../../actions";
import './style.scss'
/*
 * HomeScreen will show all the data from the current logged in user email
 * */
class HomeScreen extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);

        /*
         * It will dispatch a fetchUserDetails action to the action which will be processed by the reducer
         * to fetch user details of current email
         * */
        props.fetchUserDetails();
    }

    handleLogoutClick() {
        /*
         * It will dispatch a logout action to the action which will be processed by the reducer
         * */
        this.props.logoutUserRequest();
    }

    render() {
        const {user} = this.props;
        console.log(user);
        return (
            <div className="user-wrapper">
                <button className="logout" onClick={this.handleLogoutClick}>Logout</button>
                <div className="user-card">
                    <h4 className="user-name">{user ? `${user[0].firstName} ${user[0].lastName}` : null}</h4>
                    <div>
                        <div className="user-details-row">
                            <div className="user-detail-wrapper">
                                <span>Email Address</span>
                                <span>{user ? `${user[0].email}` : null}</span>
                            </div>
                            <div
                                className="user-detail-wrapper">
                                <span>Mobile Number</span>
                                <span>{user ? `${user[0].mobile}` : null}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logoutUserRequest: bindActionCreators(actions.logoutUser, dispatch),
        fetchUserDetails: bindActionCreators(actions.fetchUserDetails, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeScreen));