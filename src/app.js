//PACKAGE IMPORTS
import React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import firebase from 'firebase';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './style/theme';
import initialState from './initialState.json';
import './style/main.css';
import Header from './components/header';
import { Arc, ProdArcConfig, DAO } from '@dorgtech/daocomponents';
import Web3 from 'web3';

//PAGE IMPORTS
import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import PortalPage from './pages/portal';
import TestPage from './pages/test';
import ProposalsPage from './pages/proposals';
import MembersPage   from './pages/members-page';


//CONFIGURATIONS

const firebaseConfig = {
    /*
       --------
       REPLACE WITH YOUR FIREBASE CREDENTIALS
       --------
     */
    apiKey: "AIzaSyAc_q2GfZSdtql6W76zbP6J3LG3s6OD3e4",
    authDomain: "cooper-csesg-project-template.firebaseapp.com",
    databaseURL: "https://cooper-csesg-project-template.firebaseio.com",
    projectId: "cooper-csesg-project-template",
    storageBucket: "cooper-csesg-project-template.appspot.com",
    messagingSenderId: "871061605870"
};

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// React Redux & Router
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({ firebase: firebaseReducer });
const store = createStoreWithFirebase(rootReducer, initialState);

const ConnectedRouter = connect()(Router);

export default class App extends React.Component{
    render(){

    return(
        <MuiThemeProvider theme={theme}>
        <Provider store={store}>
        <Arc config={ProdArcConfig}>
        <DAO address={"0xbe1a98d3452f6da6e0984589e545d4fc25af7526"}>
            <ConnectedRouter>
                <div>
                    <Header></Header>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/signup" component={SignupPage} />
                    <Route exact path="/portal" component={PortalPage} />
                    <Route exact path="/test" component={TestPage} />
                    <Route exact path="/proposals" component={ProposalsPage}/>
                    <Route exact path="/members" component={MembersPage}/>
                </div>
            </ConnectedRouter>
        </DAO>
        </Arc>
        </Provider>
        </MuiThemeProvider>
    );
    }
}
