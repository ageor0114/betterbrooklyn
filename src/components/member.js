import React from 'react';

class Member extends React.Component{
    render(){
	return(
		<div className="member">
		<img className="user" src="https://github.com/ageor0114/betterbrooklyn/blob/master/src/images/user.png?raw=true"/>
		<p className="memberTitle">{this.props.name}</p>
		<p className="address">{this.props.address}</p>
		<p className="rep">{this.props.reputation} REP</p>
		</div>
	)
    }
};

export default Member
