import { createAction } from 'redux-actions';

export const REGISTRATION_REQUESTED = 'users/REGISTRATION_REQUESTED';
export const REGISTRATION_SUCCESS   = 'users/REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE   = 'users/REGISTRATION_FAILURE';



export const registerUser = createAction(REGISTRATION_REQUESTED, user => user);


const initialState = {
    name: '',
    email: '',
};


export default (state = initialState, action) => {

    switch (action.type) {

        default :
            return state;
    }
}