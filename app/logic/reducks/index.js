import  { combineReducers }   from      'redux';
import  home   from      './homeDuck';
import  user   from      './userDuck';


const rootDuck = combineReducers({ home, user });

export default rootDuck;