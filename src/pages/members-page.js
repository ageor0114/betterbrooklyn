import React from 'react';
import  Member from '../components/member.js';
import { Member as DMember } from 'temp-daocomponents';
import { Members as DMembers } from 'temp-daocomponents';

class MembersPage extends React.Component{

    render(){	
	return(
		<div className="myClass" id="myId">
			<br/>
			<br/>
			<br/>
			<br/>
			<center>
			<h1>Members</h1>
			<p>Here, you can take a look at the other members in the Better Brooklyn community!</p>
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
	    	</center>
	    </div>
	)
    }
};

export default MembersPage	
