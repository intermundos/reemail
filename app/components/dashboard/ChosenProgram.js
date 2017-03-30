import React from 'react';
import { connect } from 'react-redux';
import isObject from 'lodash/isObject';


const ChosenProgram = (props) => {
    return (
        <div>
            { props._program.id ? <div className="title">Chosen program: { props._program.id }</div>: null }
            <table className="table is-bordered table__program">
                <tbody>
                {
                    Object.keys(props._program).map((programKey) => (

                        <tr key={ programKey }>
                            { isObject(props._program[programKey]) || programKey === 'description' ? null :
                                <th className="table__key">{ programKey }</th> }
                            { isObject(props._program[programKey]) || programKey === 'description' ? null :
                                <td dangerouslySetInnerHTML={{__html: props._program[programKey]}}></td> }
                        </tr>

                    ))
                }
                </tbody>
            </table>
        </div>
    )
};

export default connect(
    (state) => ({ _program: state.home.program })
)(ChosenProgram);