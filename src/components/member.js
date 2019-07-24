import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Footer from '../components/footer.js';
import { Link } from 'react-router-dom';

class Member extends React.Component{
    render(){
	return(
		<div className="member">
		<h1>{this.props.name}</h1>
		<p className="address">{this.props.address}</p>
		<p>{this.props.reputation}</p>
		</div>
	)
    }
};

export default Member
