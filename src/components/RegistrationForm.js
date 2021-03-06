import React, { Component } from 'react'
import { connect } from 'react-redux'

import Form from "./Forms/Registration/index"
import { Link } from 'react-router-dom'

import { submitRegistrationForm } from '../actions/registration/index'

class RegistrationForm extends Component {

    submit = (values) => {
        console.log(values)
        this.props.dispatch(submitRegistrationForm(this.generateID(), values.nickname, values.name, values.surname, values.password, values.description))
    }

    generateID = () => new Date().getTime()

    render() {
        return(
            <div className="form">
                <Form onSubmit={this.submit} />
                <Link to="/login" className="link">
                    Log in
                </Link>
            </div>
        );
    }
}

export default connect(state => ({

})
)(RegistrationForm)
