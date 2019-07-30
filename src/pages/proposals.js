import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import  Member from '../components/member.js';
import NewMember from '../components/newMember.js';
import Proposal from '../components/proposal.js'; //unused
import CreateProposal from '../components/createProposal.js';
import CreateReputation from '../components/createReputation.js';
/*import Arc from '@dorgtech/daocomponents';
import DAO from '@dorgtech/daocomponents';
import ExampleDAOView from '@dorgtech/daocomponents';
import ArcConfig from '@dorgtech/daocomponents';
import { Member as dMember } from '@dorgtech/daocomponents';*/
import { Member as DMember } from 'temp-daocomponents';
import DAO from 'temp-daocomponents';
import { Members as DMembers } from 'temp-daocomponents';
import { Proposal as DProposal } from 'temp-daocomponents';
import { Proposals as DProposals } from 'temp-daocomponents';
import { IProposalOutcome } from '@daostack/client';

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  Divider,
  Typography,
} from '@material-ui/core';

class ProposalsPage extends React.Component{
    render(){	
	return(
		<div>
    <center>
    <br/>
    <br/>
    <br/>
    <br/>
        <br/>
    <br/>
    <h1>Proposals</h1>
    <br/>
    <DProposals>
      <DProposal.Data>
      <DProposal.Entity>
      {(data, entity) => {
        const { id, title, url, description } = data;
        return(
          <div className="gProposal">
          <ExpansionPanel style={{boxShadow: "none", borderRadius: '5px', border: '1.5px solid #d3d3d3'}}>
          <ExpansionPanelSummary>
            <center><b>{title}</b></center>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <p>{description}</p>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <p id="blue">{id}</p>
          </ExpansionPanelDetails>
          <Divider />
              <ExpansionPanelActions>
              <p>Vote Count: {data.votesCount}</p>
                <Button size="small" color="primary"onClick={async () => {
                    const tx = entity.vote(IProposalOutcome.Pass, 0);
                    await tx.toPromise();
                  }}><b>UPVOTE</b></Button>

                  <Button size="small" color="secondary"onClick={async () => {
                    const tx = entity.vote(IProposalOutcome.FAIL, 0);
                    await tx.toPromise();
                  }}><b>DOWNVOTE</b></Button>
              </ExpansionPanelActions>
          </ExpansionPanel>
          </div>)}}
      </DProposal.Entity>
      </DProposal.Data>
    </DProposals>
          <br/>
    </center>
		</div>
	)
    }
};

export default ProposalsPage
