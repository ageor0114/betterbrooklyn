import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	card: {
	    background: '#F6F6F6',
	    width: 600,
	    padding: 10,
	    margin: 'auto',
	    marginTop: '3em',
	    borderRadius: 5
	},
	h2: {
    	color: 'black',
    	fontFamily: 'Didact Gothic',
    	fontSize: 25,
	},
	input: {
	    color:"#013243",
	    border: 'none',
	    paddingLeft: 5,
	    fontFamily: 'Didact Gothic',
	},
	h3: {
	    fontSize: 17,
	    paddingBottom: 13,
	    margin: 0,
	    lineHeight: 0,
	    //color: '#802f09',
	    textAlign: 'left',
	    fontFamily: 'Didact Gothic',
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
	    width: 360,
	    fontFamily: 'Didact Gothic',
	},
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
};

class CreateProposal extends React.Component{
    constructor(props){
	super(props);
	this.state = {
		request: 0,
		description: '',
	};
    }
    
    handleChange(event, field){
	this.setState({
	    [field]: event.target.value
	});
    }

    handleSubmit(event){
	event.preventDefault(); //what does this do?
	console.log('Requesting Rep');
    }
    
    render(){

	return(
	    <div>
		<form onSubmit={(event) => {this.handleSubmit(event);}}>
	    <div className={this.props.classes.card}>
	    <br/>
	    <center>
	    <h2 className={this.props.classes.h2}><b>Request Reputation</b></h2>
	    <br/>
	    <p className="createRepBlurb">To get started, you must request reputation from the community. Reputation is essentially your voice in BetterBrooklyn and will allow you to vote for decisions. As you participate more in BetterBrooklyn, you will be awarded with more reputation which increases your voting power. Members will have to vote on your request for reputation.</p>
	    <br/>
	    </center>

		<FormControl className={this.props.classes.formcontrol}>
			<h3 className={this.props.classes.h3}>Introduce Yourself:</h3>
			<p className="createRepSub">Write a little bit about yourself. This is your first "hello" to the Better Brooklyn community!</p>
		    <TextField
		    className={this.props.classes.textfield}
			InputProps={{
                className: this.props.classes.input,
            }}
            value={this.state.description}
            onChange={(event) => {this.handleChange(event, 'description');}}
            margin="normal"
            />
		</FormControl>
		<br/>

		<FormControl className={this.props.classes.formcontrol}>
			<h3 className={this.props.classes.h3}>REP Request:</h3>
			<p className="createRepSub">How much reputation would you like to request? <b>100</b> is the typical amount.</p>
		    <TextField
		    className={this.props.classes.textfield}
			InputProps={{
                className: this.props.classes.input,
            }}
            type="request"
            value={this.state.request}
            onChange={(event) => {this.handleChange(event, 'request');}}
            margin="normal"
            />
		</FormControl>
		<br/>

		<center><Link to="/login"><Button type="submit" className={this.props.classes.button}>Submit</Button></Link>
        </center>
        <br/>
        </div>
	    </form>
	    </div>
	)
    }
};

export default withStyles(styles)(CreateProposal);
