import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addApplication } from '../actions/addApplication'
import '../App.css'

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
        console.log(this.props.company.id)
        this.props.addApplication(this.state, this.props.company.id)
        this.setState({
            position: '',
            description: ''
        })
    }

    render() {
        return (
            <div>
                <form className='form' onSubmit={this.handleSubmit} >
                    <label className='form-label'>Position</label>
                    <input type='text' name='position' value={this.props.position} onChange={this.handleChange} ></input>
                    <br/>
                    <label className='form-label'>Description</label>
                    <input type='text' name='description' value={this.props.description} onChange={this.handleChange} ></input>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }
}


export default connect(null, {addApplication}) (ApplicationInput);
