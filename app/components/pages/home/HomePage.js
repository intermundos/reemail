import React, {Component} from 'react';
import './Home.scss';

import ChosenProgram from '../../dashboard/ChosenProgram';
import ChosenCampaigns from '../../dashboard/ChosenCampaigns';
import CampaignsContainer from '../../../containers/CampaignsContainer';

class HomePage extends Component {

    constructor() {
        super();
        this.state = {
            program: '',
            campaigns: '',
        };
    }

    onInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    };

    onSearchSubmit = (event) => {
        if (event.key === 'Enter') {
            this.props._submitSearch(this.state.program);
            this.setState({ programID: this.state.program });
            this.setState({program: ''});
            event.target.blur();
            window.scrollTo(0, 0);
        }
    };

    render() {
        return (
            <div className="page page--home">
                <div className="container">
                    <div className="home__search">
                        <div className="field">
                            <p className="control has-icon">
                                <input className="input is-medium"
                                       name="program"
                                       type="search"
                                       autoComplete="program"
                                       onChange={ this.onInputChange }
                                       onKeyPress={ this.onSearchSubmit }
                                       value={ this.state.program }
                                       placeholder="Search program: ID"/>
                                <span className="icon is-small">
                              <i className="fa fa-search"/>
                            </span>
                            </p>
                        </div>
                        { this.props._isFetching ? <div className="spinner">Loading...</div> : null }
                        {
                            this.props._notFound ?
                                <div className="not-found-message has-text-centered is-danger">
                                    { `Program with ID ${ this.state.programID } not found` }
                                </div>
                                :
                                null
                        }
                    </div>
                </div>
                <hr/>
                <div className="dashboard">
                    <ChosenProgram />
                    <ChosenCampaigns />
                </div>
                <CampaignsContainer />
            </div>
        )
    }
}

export default HomePage;