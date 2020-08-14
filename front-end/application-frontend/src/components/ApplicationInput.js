import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addApplication } from '../actions/addApplication'

class ApplicationInput extends Component {

    state ={
        position: '',
        description: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addApplication(this.state, this.props.id)
        this.setState({
            position: '',
            description: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>Position</label>
                    <input type='text' name='position' value={this.props.position} onChange={this.handleChange} ></input>
                    <br/>
                    <label>Description</label>
                    <input type='text' name='description' value={this.props.description} onChange={this.handleChange} ></input>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }
}


export default connect(null, {addApplication}) (ApplicationInput);
