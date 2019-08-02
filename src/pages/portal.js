//**********************************
//   TOBE: portal.js
//**********************************


import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

//import { connect, Provider } from 'react-redux';


const styles = {
  button: {
    backgroundColor: '#f8c291',
    width: 200,
    height: 200,
    boxShadow: 'none',
    '&:hover': {
          color: 'white',
          background: '#a0522d',
      }
  }
}

class PortalPage extends React.Component{
    constructor(props){
  super(props);
  this.state = {
      name: '',
      ingredients: '',
      reason: '',
      animation: 'scale down',
      direction: 'left',
      dimmed: false,
      visible: true,
  }
  }	

    handleChange(event, field){
  this.setState({
      [field]: event.target.value
  });
    }

    handleSubmit(event){
  event.preventDefault();
  this.props.firebase.push('sandwiches', this.state)
  // also available:
  // this.props.firebase.update
  // this.props.firebase.remove
      .then((response) => {
    // do something
    this.setState({
        name: '',
        ingredients: '',
        reason: ''
    });
      })
      .catch((error) => {
    switch(error.code){
      // do something
        default:
      // default error
    }
      });
    }

    handleAnimationChange = animation => () =>
      this.setState(prevState => ({ animation, visible: !prevState.visible }))

    render(){
  let payload;
  if(!isLoaded(this.props.sandwiches)){
      // still waiting for connection
      payload = null;
  }
  if(isLoaded(this.props.sandwiches) && !isEmpty(this.props.sandwiches)){
      payload = Object.keys(this.props.sandwiches).map((key) => {
    let sandwich = this.props.sandwiches[key];
    return <li key={key}>
        <strong>{sandwich.name}</strong> - {sandwich.ingredients}<br />
    <i>{sandwich.reason}</i>
    </li>
      });
  }
  return(
      <div className="portal">
      <center>
    <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
        <Button variant="contained"
          className={this.props.classes.button}>
          Create A Proposal
        </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Link to="/proposals">
        <Button variant="contained" 
          className={this.props.classes.button}>
          See Proposals
        </Button>
        </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Link to="/members">
        <Button variant="contained"
          className={this.props.classes.button}>
          See Members
        </Button>
        </Link>
        </Grid>
      </Grid>

    <br/>
    </center>

    {/*OPTIONAL SIDEBAR*/}
      {/*<Sidebar.Pushable as={Segment}>
          <VerticalSidebar className="sidebar" animation={'scale down'} direction={'left'} visible={this.state.visible} />

          <Sidebar.Pusher dimmed={false && true}>
            <Segment basic>
            <Button onClick={this.handleAnimationChange('scale down')}>Scale Down</Button>
              <Header as='h3'>Application Content</Header>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>*/}
      </div>
  )
    }
}

export default withStyles(styles)(compose(
  firebaseConnect((props) => [
    { path: 'sandwiches' }
  ]),
  connect((state, props) => ({
    sandwiches: state.firebase.data.sandwiches
  }))
)(PortalPage))
