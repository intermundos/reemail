import React, { Component, PropTypes }       from 'react';
import { Field, reduxForm } from 'redux-form';
import './RegisterForm.scss';

import  { Redirect }   from      'react-router-dom';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirectTo: null
        };

        this.signupUser = this.signupUser.bind(this);
        this.redirect = this.redirect.bind(this);
        this.showMessage = this.showMessage.bind(this);
    }

    signupUser(values){
        this.props.registerUser(values);
        this.props.reset();
        // setTimeout(this.setState({ redirectTo: '/gate' }), 3000);
    }

    showMessage(text, status){
        return (
            <article onClick={ ()=>{ document.querySelector('.message').style.display = 'none' } }
                     className={ `message has-text-centered ${status}` }
            >
               <div className="message-body">
                   { text }
               </div>
            </article>
        )
    }

    redirect() {
        return <Redirect to={{ pathname: this.state.redirectTo }} />
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        const { _isFetching, _isExists } = this.props;
        console.log(_isExists, _isFetching);
        return (
            <div className="form__wrap register__form">

                {/*{ this.props.submitSucceeded ? this.showMessage() : null }*/}

                { this.props._isFetching ? <div className="spinner__wrap"><div className="spinner">Loading...</div></div> : null }
                { this.props._isExists ? this.showMessage('User exists', 'is-danger') : null }
                { this.props._isSuccess ? this.showMessage('Registration success', 'is-success') : null }

                <form onSubmit={ handleSubmit(this.signupUser) } className="login__form">

                    <div className={ `control has-icon` }>
                        <Field name="firstName"
                               autoFocus
                               component="input"
                               type="text"
                               placeholder="First Name"
                               className="input is-medium"/>
                        <span className="icon is-small">
                        <i className={ `fa fa-user` }/>
                </span>
                    </div>

                    <div className={ `control has-icon` }>
                        <Field name="lastName"
                               component="input"
                               type="text"
                               placeholder="Last Name"
                               className="input is-medium"/>
                        <span className="icon is-small">
                        <i className={ `fa fa-user` }/>
                    </span>
                    </div>

                    <div className={ `control has-icon` }>
                        <Field name="email"
                               component="input"
                               type="email"
                               placeholder="Email"
                               className="input is-medium"/>
                        <span className="icon is-small">
                        <i className={ `fa fa-envelope` }/>
                    </span>
                    </div>

                    <div className={ `control has-icon` }>
                        <Field name="password"
                               component="input"
                               type="password"
                               placeholder="Password"
                               className="input is-medium"/>
                        <span className="icon is-small">
                        <i className={ `fa fa-lock` }/>
                    </span>
                    </div>


                    <div>
                        <button type="submit" disabled={ pristine || submitting }
                                className="button btn-login is-large">Submit
                        </button>
                        <button type="button" disabled={ pristine || submitting } onClick={ reset }
                                className="button btn-reset is-large">Clear Form
                        </button>
                    </div>
                    { this.state.redirectTo ? this.redirect() : null }
                </form>
            </div>
        )

    }

}

// Decorate the form component
export default reduxForm({
    form: 'registration'
})(RegistrationForm);

