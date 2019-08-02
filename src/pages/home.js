import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Footer from '../components/footer.js';
import { Link } from 'react-router-dom';

class HomePage extends React.Component{
    render(){
    let mission = "We, Better Brooklyn, are an up and coming Decentralized Autonomous Organization (DAO) that is creating a platform to increase community engagement and representation by introducing a democratic method of distributing finances throughout the community. Our platform enables users to pool money and organize events based off the social needs of the community (clean local parks, organize food fairs, etc.), and enables other users to easily vote for/against any proposals, creating a decentralized, democratic institution.";
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

        <br/>

        <Grid container spacing={3}>
          <Grid id="padding" item xs={12}>
            <center><h2>Mission</h2></center>
            <br/>
            <center><p>{mission}</p></center>
           </Grid>
        </Grid>

        <br/>

        <center><AnchorLink href='#landing'>RETURN TO TOP</AnchorLink></center>

        <br/>

        <Footer/>
      </div>
  )
    }
};

export default HomePage
