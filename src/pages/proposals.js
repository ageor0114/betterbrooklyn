import React from 'react';
import Button from '@material-ui/core/Button';
import {
  Proposal as DProposal,
  Proposals as DProposals
} from '@dorgtech/daocomponents';
import { IProposalOutcome } from '@daostack/client';

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  Divider,
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
