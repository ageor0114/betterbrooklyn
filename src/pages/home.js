import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class HomePage extends React.Component{
    render(){
	return(
		<div>
		    <div>
		    	<Grid className="homeCard" id="landing" container spacing={3}>
		    		<Grid item xs={1}>
		    		</Grid>
		    		<Grid className="table" item xs={12} lg={7}>
		    			<div className="cell" id="vaMiddle">
		    			<center>
		    			<h1 className="large text">Better Brooklyn</h1>
		    			<h3 className="big text">Fostering real community growth</h3>	
		    			<br/>
		    			<br/>
		    			<button className="button"><b>GET STARTED ➤</b></button>
		    			</center>				
		    			</div>
		    		</Grid>
		    		<Grid item xs={12} lg={4}>
		    			<br/>
		    			<center><img className="hands" src="https://github.com/ageor0114/betterbrooklyn/blob/master/src/images/hands.png?raw=true"/></center>
		    		</Grid>
		    	</Grid>
		    </div>
		    <div className="homeCard" id="mission">
		    	<center><h2>Mission</h2></center>
		    	<center><p>A decentralized autonomous organization focused on bringing Brooklyn closer together on the social causes they care deeply about.</p></center>
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
