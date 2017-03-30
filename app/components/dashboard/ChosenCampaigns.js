import './ChosenCampaigns.scss';
import React from 'react';
import { connect } from 'react-redux';
import { _removeCampaignFromList, _removeProgramFromList } from '../../logic/reducks/homeDuck';
import _ from 'lodash';

const ChosenCampaigns = (props) => {
    const { _selected } = props;
    let totalSelectedCampaigns = _.flatten(_.map(_selected, 'campaigns')).length;
    let totalSelectedPrograms = _.map(_selected, 'campaigns').length;

    return (
        <div className="chosen__list">
            {
                totalSelectedPrograms > 1 ?
                    <div className="title">
                    { `Selected: ${ totalSelectedPrograms } Program${totalSelectedPrograms > 1 ? 's' : '' } with ${ totalSelectedCampaigns } Campaign${totalSelectedCampaigns > 1 ? 's' : '' }` }
                    </div> :
                    null
            }

            {
                Object.keys(_selected).map((item, index) => {
                    return (

                        <div className="selected__group" key={ item }>
                            <div className="group group__program">
                                <div className="header">
                                    <a className="delete is-medium" onClick={ ()=> props._removeProgramFromList(item) }/>
                                    Program #{ item }
                                </div>
                                <div className="program__data">{ _selected[item].program.name }</div>
                            </div>

                            <div className="group group__campaigns">
                                <div className="header">Campaigns for program #{ item } </div>
                                {
                                    _selected[item].campaigns.map((c) => {
                                        return (
                                            <div className="campaign__unit" key={ c.id }>
                                                <a className="delete is-small" onClick={ ()=> props._removeCampaignFromList(c, item) }/>
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



        </div>
    )
};

export default connect(
    (state) => ({ _selected: state.home.selectedCampaigns }),
    { _removeCampaignFromList, _removeProgramFromList }
)(ChosenCampaigns);
