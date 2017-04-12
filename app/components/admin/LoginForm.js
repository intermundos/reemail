import React  from 'react';
import { Field, reduxForm } from 'redux-form';
import './LoginForm.scss';

const LoginForm = (props) => {
    const { handleSubmit, pristine, reset, submitting, submitForm } = props;
    return (
        <form onSubmit={ submitForm } className="login__form">

            <div className={ `control has-icon` }>
                <Field name="email"
                       component="input"
                       type="email"
                       placeholder="Email"
                       autoFocus
                       className="input is-medium"/>
                <span className="icon is-small">
                        <i className={ `fa fa-envelope` }/>
                </span>
            </div>

            <div className={ `control has-icon` }>
                <Field name="password"
                       component="input"
                       type="text"
                       placeholder="password"
                       className="input is-medium"/>
                    <span className="icon is-small">
                        <i className={ `fa fa-lock` }/>
                    </span>
            </div>

            <div>
                <button type="submit" disabled={ pristine || submitting }
                        className="button btn-login is-outlined is-large">Submit
                </button>
                <button type="button" disabled={ pristine || submitting } onClick={ reset }
                        className="button btn-reset is-large">Clear Form
                </button>
            </div>
        </form>
    )
};

// Decorate the form component
export default reduxForm({
    form: 'login'
})(LoginForm);
