import React from 'react';
import Button from '@material-ui/core/Button';

class Footer extends React.Component{
    render(){
	return(
		<div className="footer">
			<center>
			<h2 id="goth">Contact Us</h2>
			<hr noshade width="130px"/>
			<br/>
			<p id="goth">Get in touch with us about any questions, comments, concerns you might have -- or if you'd just like to discuss how we can make our city better!</p>
			<Button>info@betterbrooklyn.nyc</Button>
			</center>
	    </div>
	)
    }
};

export default Footer
