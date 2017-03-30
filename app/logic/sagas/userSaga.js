import { takeEvery }       from 'redux-saga/effects';
import { take, put, call, fork }       from 'redux-saga/effects';
import  { REGISTRATION_REQUESTED, REGISTRATION_SUCCESS, REGISTRATION_FAILURE }   from      '../reducks/userDuck';
import { registerNewUser } from '../api/users';


export function* registerUser(action) {
    console.log('Running user worker saga');
    try {
        let response = yield call(registerNewUser, action.payload);
        console.log(response, 'is gotten from API',);
        yield put({type: REGISTRATION_SUCCESS, data: response });

    } catch (err) {
        console.log('Request failed', err);
        yield put({ type: REGISTRATION_FAILURE });
    }
}

// Watcher saga
export function* watchRegistration() {
    console.log('Running user watch saga...');
    yield takeEvery(REGISTRATION_REQUESTED, registerUser);
}

// Root signup saga
export default function* userSaga() {
    yield fork(watchRegistration);
};
