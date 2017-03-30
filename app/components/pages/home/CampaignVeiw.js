import React from 'react';
import isObject from 'lodash/isObject';

const Campaign = (props) => {
    let campaign = props.campaign;
    return (
        <div className="campaign__wrap">

            {
                Object.keys(campaign).map((key, index) =>
                    <div className="campaign__wrap--row" key={ key }>
                        {
                            isObject(campaign[key]) || key === 'description' ?
                                null
                                :
                                <span className="table__key">{ `${ key }: ` }</span>
                        }
                        {
                            isObject(campaign[key]) || key === 'description' ?
                                null
                                :
                                <span dangerouslySetInnerHTML={{__html: campaign[key]}}></span>
                        }

                    </div>
                )
            }

            <button className="button is-medium is-info add-campaign-btn" onClick={ () => props._addToList(campaign, campaign.program_id)}>
                Add to list
            </button>
        </div>
    )
};

export default Campaign;