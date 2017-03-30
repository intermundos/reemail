import './ChosenCampaigns.scss';
import React from 'react';
import { connect } from 'react-redux';
import { _removeFromList } from '../../logic/reducks/homeDuck';
import _ from 'lodash';

const ChosenCampaigns = (props) => {
    const { _selected } = props;
    console.log(_selected);
    let totalSelectedCampaigns = _.flatten(_.map(_selected, 'campaigns')).length;
    let totalSelectedPrograms = _.map(_selected, 'campaigns').length;


    return (
        <div className="chosen__list">
            <div className="title">
                { `Selected: ${ totalSelectedPrograms } Program${totalSelectedPrograms > 1 ? 's' : '' } with ${ totalSelectedCampaigns } Campaign${totalSelectedCampaigns > 1 ? 's' : '' }` }
                </div>

            {
                Object.keys(_selected).map((item, index) => {
                    return (

                        <div className="selected__group" key={ item }>
                            <div className="group group__program">
                                <div className="header">Program #{ item }</div>
                                <div className="program__data">{ _selected[item].program.name }</div>
                            </div>

                            <div className="group group__campaigns">
                                <div className="header">Campaigns for program #{ item } </div>
                                {
                                    _selected[item].campaigns.map((c) => {
                                        return (
                                            <div className="campaign__unit" key={ c.id }>
                                                { c.id } - { c.name }
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>

                    )
                })
            }

            {/*{*/}
                {/*Object.keys(selected).map((campaign, index) => {*/}
                    {/*let pName = selected[campaign][index].program.name;*/}
                    {/*let pID = selected[campaign][index].program.id;*/}
                    {/*let campaigns = selected[campaign];*/}
                    {/*return (*/}
                        {/*<div className="selected__group" key={ index }>*/}
                            {/*<div className="program__unit">*/}
                                {/*<div className="header">Program:</div>*/}
                                {/*<div className="program__data"> { pID } - { pName }</div>*/}

                            {/*</div>*/}
                            {/*<div className="campaigns__unit">*/}
                                {/*<div className="header">Campaigns: </div>*/}
                                {/*{*/}
                                    {/*campaigns.map((c) => {*/}
                                        {/*return (*/}
                                            {/*<div className="campaign__unit" key={ c.campaign.id }>{ c.campaign.id } - { c.campaign.name }</div>*/}
                                        {/*)*/}
                                    {/*})*/}
                                {/*}*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*)*/}
                {/*})*/}
            {/*}*/}
            {/*<a className="delete is-medium" onClick={ ()=> props._removeFromList(campaign) }></a>*/}

        </div>
    )
};

export default connect(
    (state) => ({ _selected: state.home.selectedCampaigns }),
    { _removeFromList }
)(ChosenCampaigns);
