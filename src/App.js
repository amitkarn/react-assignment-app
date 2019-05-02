import React from 'react';
import './App.scss';
import {
    Switch,
    Route,
    BrowserRouter,
    Redirect,
    withRouter
} from 'react-router-dom';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Authentication from './containers/Authentication'
import HomeScreen from './containers/HomeScreen'
import NotFound from './containers/NotFound'

class App extends React.Component {
    /*
     * If none of the users is logged in then it will show Authentication component
     * else HomeScreen will be shown to the logged in user.
     * */
    render() {
        return (
            <div className="App">
                <BrowserRouter basename="/">
                    <Switch>
                        <Route path="/" exact render={(props) => (
                            this.props.isLoggedIn ? <HomeScreen/> : <Redirect to="/auth"/>
                        )}/>
                        <Route path="/auth"
                               render={(props)=> (
                                   this.props.isLoggedIn ? <Redirect to="/"/> : <Authentication/>
                               )}/>
                        <Route component={NotFound}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(App);
