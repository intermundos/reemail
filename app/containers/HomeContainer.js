import React      from 'react';
import { connect }        from 'react-redux';
import HomeView from '../components/pages/home/HomePage'
import { _submitSearch } from '../logic/reducks/homeDuck'

const Home = connect(
    (state)=>({ _isFetching: state.home.isFetching, _notFound: state.home.notFound }),
    { _submitSearch }
)(HomeView);

export default Home;