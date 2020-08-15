import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCompany } from '../actions/editCompany';
import { Redirect } from 'react-router-dom';
import '../App.css'

class CompanyEdit extends Component {

    state = {
        name: '',
        address: ''
    }

    handleChange = (event) => {

        this.setState({
            // the bracket are so the function evaluates the name similar to useing {}, in react
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let company = {...this.state, id: this.props.company.id}
        this.props.editCompany(company)
        this.setState({
            name: '',
            address: ''
        })
    }

    render() {
        return (
            <div>
                <form className='form' onSubmit={this.handleSubmit}>
                    <label className='form-label'>Name</label>
                    <input className='nav-input' type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="name"></input>
                    <br/>
                    <label className='form-label'>Address</label>
                    <input className='nav-input' type="text" name="address" value={this.state.address} onChange={this.handleChange} placeholder="address"></input>
                    <br/>
                    <input type="submit"></input>
                </form>
                <br/>
            </div>
        )
    }
}

export default connect(null, { editCompany })(CompanyEdit);