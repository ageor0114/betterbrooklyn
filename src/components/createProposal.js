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
		title: '',
		description: '',
		request: 0,
		recipient: '',
	};
    }
    
    handleChange(event, field){
	this.setState({
	    [field]: event.target.value
	});
    }

    handleSubmit(event){
	event.preventDefault(); //what does this do?
	console.log('Proposing Event');
    }
    
    render(){

	return(
	    <div className="createProposal">
		<form onSubmit={(event) => {this.handleSubmit(event);}}>
	    <div className={this.props.classes.card}>
	    <br/>
	    <center><h2 className={this.props.classes.h2}><b>Create A Proposal</b></h2></center>
		{/*TITLE*/}
		<FormControl className={this.props.classes.formcontrol}>
			<h3 className={this.props.classes.h3}>Title:</h3>
			<p>What event/project do you need funding for?</p>
		    <TextField
		    className={this.props.classes.textfield}
			InputProps={{
                className: this.props.classes.input,
            }}
            id="required"
            value={this.state.title}
            onChange={(event) => {this.handleChange(event, 'title');}}
            margin="normal"
            />
		</FormControl>
		<br/>

		<FormControl className={this.props.classes.formcontrol}>
			<h3 className={this.props.classes.h3}>Description:</h3>
			<p>Share a little bit about your event/project. What do you need the money for? How might it benefit the community?</p>
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
			<h3 className={this.props.classes.h3}>ETH Request:</h3>
			<p>How much money do you need?</p>
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

		<FormControl className={this.props.classes.formcontrol}>
			<h3 className={this.props.classes.h3}>Recipient:</h3>
			<p>Who should the money be sent to?</p>
		    <TextField
		    className={this.props.classes.textfield}
			InputProps={{
                className: this.props.classes.input,
            }}
            type="request"
            value={this.state.recipient}
            onChange={(event) => {this.handleChange(event, 'recipient');}}
            margin="normal"
            />
		</FormControl>
		<br/>

		<center><Button type="submit" className={this.props.classes.button}>Create</Button>
        </center>
        <br/>
        </div>
	    </form>
	    </div>
	)
    }
};

export default withStyles(styles)(CreateProposal);
