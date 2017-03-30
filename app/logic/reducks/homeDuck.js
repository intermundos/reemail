import empty from 'lodash/isEmpty';
import _ from 'lodash';

export const SEARCH_REQUEST            = 'search/SEARCH_REQUEST';
export const SEARCH_REQUEST_SUCCESS    = 'search/SEARCH_REQUEST_SUCCESS';
export const SEARCH_REQUEST_FAILURE    = 'search/SEARCH_REQUEST_FAILURE';
export const ADD_CAMPAIGN_TO_LIST      = 'campaign/ADD_CAMPAIGN_TO_LIST';
export const REMOVE_CAMPAIGN_FROM_LIST = 'campaign/REMOVE_CAMPAIGN_FROM_LIST';
export const REMOVE_PROGRAM_FROM_LIST  = 'campaign/REMOVE_PROGRAM_FROM_LIST';


export const _submitSearch = (programID) => {
    return {
        type: SEARCH_REQUEST,
        payload: programID
    }
};

export const _addToList = (campaign, id) => {
    return {
        type: ADD_CAMPAIGN_TO_LIST,
        payload: {
            campaign: campaign,
            pID: id
        }
    }
};

export const _removeCampaignFromList = (campaign, id) => {
    return {
        type: REMOVE_CAMPAIGN_FROM_LIST,
        payload: campaign,
        id
    }
};

export const _removeProgramFromList = (id) => {
    return {
        type: REMOVE_PROGRAM_FROM_LIST,
        payload: id
    }
};


const initialState = {
    isFetching: false,
    notFound: false,
    program: {},
    campaigns: [],
    selectedCampaigns: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_REQUEST :
            return {...state, isFetching: true, notFound: false};

        case SEARCH_REQUEST_SUCCESS :
            if (empty(action.program)) {
                return {...state, notFound: true, isFetching: false}
            }
            else {
                return {
                    ...state,
                    program: action.program,
                    campaigns: action.campaigns,
                    isFetching: false,
                    notFound: false
                };
            }

        case ADD_CAMPAIGN_TO_LIST :
            let id = action.payload.pID;
            if (!state.selectedCampaigns[id]) {
                return {
                    ...state,
                    selectedCampaigns: {
                        ...state.selectedCampaigns,
                        [action.payload.pID]: {
                            program: state.program,
                            campaigns: [action.payload.campaign]
                        }
                    }
                };
            }
            else {
                let ifInState = state.selectedCampaigns[id].campaigns.indexOf(action.payload.campaign) > -1;
                return ifInState ?
                    { ...state } :
                    {
                        ...state,
                        selectedCampaigns: {
                            ...state.selectedCampaigns,
                            [action.payload.pID]: {
                                program: state.program,
                                campaigns: (state.selectedCampaigns[id]['campaigns']).concat(action.payload.campaign)
                            }
                        }
                    }
            }

        case REMOVE_PROGRAM_FROM_LIST :
            return { ...state, selectedCampaigns: _.omit(state.selectedCampaigns, action.payload) };

        case REMOVE_CAMPAIGN_FROM_LIST :

            console.log(state.selectedCampaigns[action.id].campaigns.filter(campaign => campaign !== action.payload));

            return {
                ...state,
                selectedCampaigns: {
                    ...state.selectedCampaigns,
                    [action.id]: {
                        ...state.selectedCampaigns[action.id],
                        campaigns: state.selectedCampaigns[action.id].campaigns.filter(campaign => campaign !== action.payload)
                    }
                }
            };

        default:
            return state;
    }
};