import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import PortalPage from './portal';


const styles = {
	button: {
	    borderRadius: 2,
	    letterSpacing: 1,
	    width: 150,
	    height: 50,
	    color: 'white',
	    background: '#802f09',
	    '&:hover': {
	        color: '#802f09',
	        background: '#F6F6F6',
	    }
	},

  formcontrol: {
    width: 360,
    margin: 20,
  },

  textfield: {
    background: 'white',
    padding: 5,
    border: '1px solid lightgrey',
    borderRadius: 3,
    width: 300,
},

  input: {
    color:"#013243",
    border: 'none',
    paddingLeft: 5,
},

  h3: {
    fontSize: 17,
    padding: 0,
    margin: 0,
    lineHeight: 0,
    color: '#802f09',
    textAlign: 'left',
    fontFamily: 'Didact Gothic',
},

  h2: {
    color: '#802f09',
    fontFamily: 'Didact Gothic',
},

  posth2: {
    color: 'white',
},

	signupcard: {
	    background: '#F6F6F6',
	    width: 360,
	    padding: 10,
	    margin: 'auto',
	    marginTop: '3em',
	    borderRadius: 3
	},

  linktologin: {
    textDecoration: 'none',
    color: '#013243',
    fontFamily: 'Didact Gothic',
    '&:hover': {
        textDecoration: 'underline',
    }
},
};
class LoginPage extends React.Component{
    constructor(props){
	super(props);
	this.state = {
	    email: '',
	    password: ''
	};
    }
    
    handleChange(event, field){
	this.setState({
	    [field]: event.target.value
	});
    }

    handleSubmit(event){
	event.preventDefault();
	this.props.firebase.login(this.state)
	    .then((response) => {
		// do something
	    })
	    .catch((error) => {
		switch(error.code){
                case 'auth/user-not-found':
                alert('It seems like you dont have an account? Create one now!')
                break;
                case 'auth/wrong-password':
                alert('Uh oh! Looks like you put the wrong password.')
                case 'auth/invalid-email':
                alert('That email isnt valid')
                break;
                case 'auth/network-request-failed':
                alert('Something wrong with your network.')
                break;
                default:
                // default error

		}
	    });
    }

    logout(){
	this.props.firebase.logout();
    }
    
    render(){
    console.log(this.props.profile);
	let payload;
	if(!this.props.auth.isLoaded){
	    // auth is not warmed up
	    payload = null;
	}
	if(this.props.auth.isLoaded && this.props.auth.isEmpty){
	    // auth is ready
	    // but user is not logged in
	    payload = <form onSubmit={(event) => {this.handleSubmit(event);}}>
	    <div className={this.props.classes.signupcard}>
	    <br/>
        <center><h2
        className={this.props.classes.h2}>Login!</h2></center>
        <FormControl
        	className={this.props.classes.formcontrol}>
            <h3
            className={this.props.classes.h3}
            >Email:</h3>
		    <TextField
		    className={this.props.classes.textfield}
		    InputProps={{
                className: this.props.classes.input,
            }}
			value={this.state.email}
			onChange={(event) => {this.handleChange(event, 'email');}}
			margin="normal"
			id="required"
		    />
		</FormControl>
		<FormControl className={this.props.classes.formcontrol}>
            <h3 className={this.props.classes.h3}>Password:</h3>
            <TextField
            className={this.props.classes.textfield}
            InputProps={{
                className: this.props.classes.input,
            }}
			type="password"
			value={this.state.password}
			onChange={(event) => {this.handleChange(event, 'password');}}
			margin="normal"
			id="required"
		    />
		</FormControl>
		<center>
		{/*<Link to="/portal">*/}
		<Button type="submit"
			className={this.props.classes.button}>
		    Login
		</Button>
		{/*</Link>*/}
		<br/>
		<br/>
        <p><a href="/signup"
        className={this.props.classes.linktologin}
        >Dont have an account yet? Signup here!</a></p>
        </center>
        <br/>
        </div>
	    </form>;
	}
	if(this.props.auth.isLoaded && !this.props.auth.isEmpty){
	    // auth is warmed up
	    // and user is not logged in
	    console.log(this.props);
	    payload = <div>
		<div>
		<center>
		    <h1>Welcome back, {this.props.auth.email}!</h1>
		    <br/>
		    <p>What would you like to do today?</p>
		    <PortalPage/>
		    <br/>
		 </center>
		</div>
		<div>
		    
		</div>
	    </div>;
	}
	return(
	    <div className="login">
		{payload}
	    </div>
	)
    }
};

//export default LoginPage
export default withStyles(styles)(compose(
    firebaseConnect(),
    connect(({firebase: {auth}}) => ({auth})),
)(LoginPage));