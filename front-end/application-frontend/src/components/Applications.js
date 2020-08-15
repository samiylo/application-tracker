import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteApplication } from '../actions/deleteApplication'



class Applications extends Component {

    state ={

    }


    handleSubmit = (event,application) => {
        event.preventDefault()
        this.props.deleteApplication(application.id, this.props.company.id)

    }
    render() {
        return (
            <div>
                {this.props.applications && this.props.applications.map(application => 
                    <div key={application.id}>
                        <h4>{application.position}</h4>
                        <p>{application.description}</p>
                        <button onClick={(event) => this.handleSubmit(event, application)} type="submit">delete</button>
                    </div>)}
            </div>
        )
    }
}


export default connect(null, {deleteApplication})(Applications);