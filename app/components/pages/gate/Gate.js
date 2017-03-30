import React from 'react';
import { connect } from 'react-redux';


const Gate = (props) => {

    return (
        <div>
            <div className="container">
                <button className="button is-medium is-success">Register</button>
            </div>
        </div>
    )
};


export default connect()(Gate);

