import {takeEvery}       from 'redux-saga/effects';
import {take, put, call, fork}       from 'redux-saga/effects';
import  {SEARCH_REQUEST, SEARCH_REQUEST_SUCCESS, SEARCH_REQUEST_FAILURE}   from      '../reducks/homeDuck';
import axios from 'axios';
const programURL  = 'http://www.interspace.site/offertool/programsList.php?program_id=';
const campaignURL = 'http://www.interspace.site/offertool/campaignsLists.php?program_id=';
import isEmpty from 'lodash/isEmpty';

const getProgram = (programID) => {
    let result = {
        program: {},
        campaigns: []
    };
    return axios
        .get(`${ programURL }${ programID }`)
        .then((res) => {
            // console.log(res);
            // console.log(res.data.programs);
            result.program = res.data.programs.program;
            return axios
                .get(`${ campaignURL }${ programID }`)
                .then((res) => {
                    result.campaigns = res.data.reply[0].campaigns[0].campaign || [];
                    return !isEmpty(result.program) ? result :  { program: {}, campaigns: [] };
                })

        })
        .catch((err) => {
            console.log(err)
        });

};


// Worker saga
export function* searchProgram(action) {
    console.log('Running home worker saga');
    try {
        let response = yield call(getProgram, action.payload);
        console.log(response, 'is gotten from API',);
        yield put({type: SEARCH_REQUEST_SUCCESS, program: response.program, campaigns: response.campaigns });

    }

    catch (err) {
        console.log('Request failed', err);
        yield put({type: SEARCH_REQUEST_FAILURE});
    }
}


// Watcher saga
export function* watchLogin() {
    console.log('Running home watch saga...');
    yield takeEvery(SEARCH_REQUEST, searchProgram);
}

// Root signup saga
export default function* homeSaga() {
    yield fork(watchLogin);
};

