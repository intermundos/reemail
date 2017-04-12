import React from 'react';
import  { Route, Link }   from      'react-router-dom';
import './Gate.scss';


import LoginForm from './LoginForm';
import RegistrationForm from '../../containers/RegistrationContainer';


const Gate = (props) => {

    return (
        <div className="page page__login">
            <div className="container">
                <hr/>
                <div className="container has-text-centered gate">
                    <h2 className="title is-2">Welcome!</h2>
                    <Link to={`${props.match.url}`} className="button is-large btn-login" >Login</Link>
                    <Link to={`${props.match.url}/signup`} className="button is-large btn-signup">Signup</Link>

                </div>
                <hr/>

                <Route exact={ true } path={`${props.match.url}/signup`} component={ RegistrationForm }/>
                <Route exact={ true } path={`${props.match.url}/`} component={ LoginForm }/>
            </div>
        </div>
    )
};


export default Gate;

