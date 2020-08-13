import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCompany } from '../actions/addCompany'

class CompanyInput extends Component {

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
        
        this.props.addCompany(this.state)
        this.setState({
            name: '',
            address: ''
        })
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Company Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="name"></input>
                    <br/>
                    <label>Company Address</label>
                    <input type="text" name="address" value={this.state.address} onChange={this.handleChange} placeholder="address"></input>
                    <br/>
                    <input type="submit"></input>
                </form>
                <br/>
            </div>
        )
    }
}

export default connect(null, { addCompany })(CompanyInput);
