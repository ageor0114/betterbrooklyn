import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class HomePage extends React.Component{
    render(){
	return(
		<div>
		    <div className="homeCard" id="landing">
		    	<Grid container spacing={3}>
		    		<Grid className="landingTitle" item xs={12} lg={6}>
		    			<div id="vaMiddle">
		    			<h3>Building a</h3>
						<h1>Better</h1>
						<h1>Brooklyn.</h1>
						</div>
		    		</Grid>
		    		<Grid className="landingImage" item xs={12} lg={6}>
		    			<img src="https://github.com/ageor0114/betterbrooklyn/blob/master/src/images/hands.png?raw=true"/>
		    		</Grid>
		    	</Grid>

				<center><AnchorLink href='#mission'><img className="arrow" src="https://github.com/ageor0114/betterbrooklyn/blob/master/src/images/downarrow.gif?raw=true"/></AnchorLink></center>
		    </div>
		    <div className="homeCard" id="mission">
		    	<center><h2>Mission</h2></center>

		    	<center><AnchorLink href='#howTo'><img className="arrow" src="https://github.com/ageor0114/nyit-hackathon/blob/master/src/pages/downarrow.gif?raw=true"/></AnchorLink></center>
		    </div>
		    <div className="homeCard" id="howTo">
		    	<center><h2>How It Works</h2></center>
		    	<center><AnchorLink href='#landing'>UP</AnchorLink></center>
		    </div>
	    </div>
	)
    }
};

export default HomePage
