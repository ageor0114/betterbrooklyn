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

import  Member from '../components/member.js';
import NewMember from '../components/newMember.js';
import Proposal from '../components/proposal.js';
/*import Arc from '@dorgtech/daocomponents';
import DAO from '@dorgtech/daocomponents';
import ExampleDAOView from '@dorgtech/daocomponents';
import ArcConfig from '@dorgtech/daocomponents';
import { Member as dMember } from '@dorgtech/daocomponents';*/
import { Member as DMember } from 'temp-daocomponents';
import DAO from 'temp-daocomponents';
import { Members as DMembers } from 'temp-daocomponents';

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
	    <div className="portal">
		<center>

	    {/*<Arc config={new ArcConfig("web3", "graphql", "graphql-ws")}>
		  <DAO address="0x74504B811BbF357eDB6Daa8346D51f6Dd113113F">
		    <DAO.Data>
			  {(data: DAOData) => {
			  	return(
			    <div>
			    <div>{"Token: "}</div>
			    </div>)}}
			  </DAO.Data>
			  <dMember address="0x64c0e885cdd1F5B526f5520beE328aA811418afc"/>
		  </DAO>
		</Arc>*/}
		<DAO.Data>
		{(data: DAOData) => {
		  	return(
		    <div>
		    <div>{"DAO: " + data.name}</div>
		    <div>{"Token: " + data.tokenName}</div>
		    </div>)}}
		</DAO.Data>

		{/*TRY DMembers*/}
		{/*<DMember address="0xb1b7586656116d546033e3baff69bfcd6592225e">
		<DAO.Data>
		<DMember.Data>
		{(dao: DAOData, member: MemberData) => {
			return(
			<div>
			<p>{"DAO Address: " + dao.address}</p>
			<p>{"Member Address: " + member.address}</p>
			</div>)}}
		</DMember.Data>
		</DAO.Data>
		</DMember>*/}

		<br/>

		<DMembers>
		<DMember.Data>
		{(member: MemberData) => {
	      return(

	      <div>
	      <Member name="Name" address={member.address} reputation={""+(member.reputation/1000000000000000000)}/>
	      <br/>
	      </div>)}}
		</DMember.Data>
		</DMembers>

		{/*<DAO.Data>
		  {(dao: DAOData) => {
		  	return(
		    <div>{dao.name}</div>
		  )}}
		</DAO.Data>*/}

	    {/*<Members>
	    <DAO.Code>
	    <Member.Data>
		    {(daoCode: DAOCode, member: MemberData) => {
		    	return(
		      <div>
		      <div>{member.name}</div>
		      <div>{member.reputation}</div>
		      </div>)}}
	    </Member.Data>
	    </DAO.Code>
	    </Members>*/}

	    <hr/>

	    

	    <h3>Proposals</h3>
	    <Proposal name="Clean Up The Park" yes="15" no="3"/>
	    <h3>Reputation Requests</h3>
	    <br/>
	    <NewMember name="Oumar" address="0x4fBAA83195fC4eEb798C6e0217d88046c9310c0E"/>
	    <br/>
	    <h3>Members</h3>
	    <br/>
	    {/*<RMember name="Nelson" address="0x4fBAA83195fC4eEb798C6e0217d88046c9310c0E" reputation="24"/>
	    <br/>
	    <RMember name="Arian" address="0x4fBAA83195fC4eEb798C6e0217d88046c9310c0E" reputation="24"/>
	    <br/>
	    <RMember name="Maryna" address="0x4fBAA83195fC4eEb798C6e0217d88046c9310c0E" reputation="24"/>
	    <br/>
	    <RMember name="Subhan" address="0x4fBAA83195fC4eEb798C6e0217d88046c9310c0E" reputation="24"/>
	    <br/>
	    <RMember name="Felix" address="0x4fBAA83195fC4eEb798C6e0217d88046c9310c0E" reputation="24"/>
	    <br/>
	    <RMember name="Tiffany" address="0x4fBAA83195fC4eEb798C6e0217d88046c9310c0E" reputation="24"/>
	    <br/>
	    <RMember name="Austin" address="0x4fBAA83195fC4eEb798C6e0217d88046c9310c0E" reputation="24"/>
	    <br/>*/}

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
