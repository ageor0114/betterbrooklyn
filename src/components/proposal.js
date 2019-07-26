import React from 'react';

class Proposal extends React.Component{

	vote(){
		console.log('Executing Vote');
	}

    render(){	
	return(
		<div className="proposal">
			<h3>{this.props.name}</h3>
			<p>YES: {this.props.yes}%</p>
			<p>NO: {this.props.no}%</p>
			<button className="pVote" onClick={this.vote()}>VOTE</button>
	    </div>
	)
    }
};

export default Proposal
