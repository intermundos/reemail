import  { fork }   from      'redux-saga/effects';
import  homeSaga   from      './homeSaga';
import  userSaga   from      './userSaga';

export default function* rootSaga() {
    yield [
        fork(homeSaga),
        fork(userSaga)
    ]
}

