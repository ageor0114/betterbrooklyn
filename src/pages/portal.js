//**********************************
//   TOBE: portal.js
//**********************************


import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

class PortalPage extends React.Component{
    constructor(props){
	super(props);
	this.state = {
	    name: '',
	    ingredients: '',
	    reason: '',
	    animation: 'scale down',
	    direction: 'left',
	    dimmed: false,
	    visible: true,
	}
	}	

    handleChange(event, field){
	this.setState({
	    [field]: event.target.value
	});
    }

    handleSubmit(event){
	event.preventDefault();
	this.props.firebase.push('sandwiches', this.state)
	// also available:
	// this.props.firebase.update
	// this.props.firebase.remove
	    .then((response) => {
		// do something
		this.setState({
		    name: '',
		    ingredients: '',
		    reason: ''
		});
	    })
	    .catch((error) => {
		switch(error.code){
			// do something
		    default:
			// default error
		}
	    });
    }

    handleAnimationChange = animation => () =>
    	this.setState(prevState => ({ animation, visible: !prevState.visible }))

    render(){
	let payload;
	if(!isLoaded(this.props.sandwiches)){
	    // still waiting for connection
	    payload = null;
	}
	if(isLoaded(this.props.sandwiches) && !isEmpty(this.props.sandwiches)){
	    payload = Object.keys(this.props.sandwiches).map((key) => {
		let sandwich = this.props.sandwiches[key];
		return <li key={key}>
		    <strong>{sandwich.name}</strong> - {sandwich.ingredients}<br />
		<i>{sandwich.reason}</i>
		</li>
	    });
	}
	return(
	    <div id="goth" className="portal">

	    {/*<Grid container spacing={3}>
	    <Grid item xs={3}>
	    </Grid>
	    <Grid item xs={12} lg={6}>*/}
	    <center>
	    	<h1>Hold on tight, content will be released shortly ...</h1>
	    	<img className="rocket" src="https://github.com/ageor0114/betterbrooklyn/blob/master/src/images/rocket.jpg?raw=true"/>
	    	<p id="padding">In the mean time, get ready for our official kickoff date on 7/27 at the Bushwick Generator! We look forward to seeing you.</p>
	    </center>

	    {/*<Sidebar.Pushable as={Segment}>
          <VerticalSidebar className="sidebar" animation={'scale down'} direction={'left'} visible={this.state.visible} />

          <Sidebar.Pusher dimmed={false && true}>
            <Segment basic>
            <Button onClick={this.handleAnimationChange('scale down')}>Scale Down</Button>
              <Header as='h3'>Application Content</Header>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>*/}
		
		{/*<form onSubmit={(event) => {this.handleSubmit(event);}}>
		    <FormControl fullWidth>
			<TextField
			    label="Sandwich Name"
			    value={this.state.name}
			    onChange={(event) => {this.handleChange(event, 'name');}}
			    margin="normal"
			/>
		    </FormControl>
		    <FormControl fullWidth>
			<TextField
			    label="Ingredients"
			    value={this.state.ingredients}
			    onChange={(event) => {this.handleChange(event, 'ingredients');}}
			    margin="normal"
			/>
		    </FormControl>
		    <FormControl fullWidth>
			<TextField
			    label="Why is it so good?"
			    value={this.state.reason}
			    onChange={(event) => {this.handleChange(event, 'reason');}}
			    margin="normal"
			/>
		    </FormControl>
		    <Button type="submit"
				  variant="contained"
				  color="primary">
			Add
		    </Button>
		</form>
		My favorite sandwiches are:
		<ul>
		    {payload}
		</ul>*/}
	    </div>
	)
    }
}

export default compose(
  firebaseConnect((props) => [
    { path: 'sandwiches' }
  ]),
  connect((state, props) => ({
    sandwiches: state.firebase.data.sandwiches
  }))
)(PortalPage)
