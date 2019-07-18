import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Footer from '../components/footer.js';
import { Link } from 'react-router-dom';

class HomePage extends React.Component{
    render(){
    let filler = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat. Nunc aliquet bibendum enim facilisis gravida. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Amet luctus venenatis lectus magna fringilla. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Sagittis orci a scelerisque purus semper eget duis. Nulla pharetra diam sit amet nisl suscipit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Fusce ut placerat orci nulla. Pharetra vel turpis nunc eget lorem dolor. Tristique senectus et netus et malesuada.';
	return(
		<div id="goth">
		    <div>
		    	<Grid className="homeCard" id="landing" container spacing={3}>
		    		<Grid item xs={1}>
		    		</Grid>
		    		<Grid className="table" item xs={12} lg={7}>
		    			<div className="cell" id="vaMiddle">
		    			<center>
		    			<h1 className="large text">Better Brooklyn</h1>
		    			<h3 className="big text">Facilitating real community action</h3>	
		    			<br/>
		    			<br/>
		    			<Link to="/signup">
		    			<button className="button"><b>GET STARTED ➤</b></button>
		    			</Link>
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
		    	<br/>
		    	<center><p>A decentralized autonomous organization focused on bringing Brooklyn closer together on the social causes they care deeply about. {filler}</p></center>
		    </div>
		    <div className="homeCard" id="howTo">
		    	<center><h2>How It Works</h2></center>
		   		<br/>
		   		<center><p>{filler}</p></center>
		   		<br/>
		    	<center><AnchorLink href='#landing'>RETURN TO TOP</AnchorLink></center>
		    	<br/>
		    </div>
		    <Footer/>
	    </div>
	)
    }
};

export default HomePage
