import React from 'react';

class NewMember extends React.Component{

	vote(){
		console.log('Vote Being Processed ...');
	}

    render(){
	return(
		<div className="member">
		<img className="user" src="https://github.com/ageor0114/betterbrooklyn/blob/master/src/images/user.png?raw=true"/>
		<p className="memberTitle">{this.props.name}</p>
		<p className="address">{this.props.address}</p>
		<button className="vote" onClick={this.vote()}>VOTE</button>
		</div>
	)
    }
};

export default NewMember
