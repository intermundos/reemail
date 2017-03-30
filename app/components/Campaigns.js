import React from 'react';
import {connect} from 'react-redux';
import { _addToList } from '../logic/reducks/homeDuck';

import CampaignView from './CampaignVeiw';

const Campaigns = (props) => {
    let campaigns = props._campaigns;
    return (
        <div className="campaigns__wrap">
            {campaigns.map((c, index) => (
                <CampaignView key={ index } campaign={ c } {...props}/>
            ))}
        </div>
    )

};

export default connect(
    (state) => ({_campaigns: state.home.campaigns}),
    { _addToList }
)(Campaigns);





