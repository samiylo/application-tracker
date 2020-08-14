import React from 'react'
import { connect } from 'react-redux'
import { deleteApplication } from '../actions/deleteApplication'

function Applications(props) {

    const handleDelete = () => {
        props.deleteApplication()
    }

    let array = props.applications ? props.applications.map(application =>
        <div key={application.id}>
            <h3>{application.position}</h3>
            <p>
                {application.description}
            </p>
            <button onClick={handleDelete}>Delete</button>

        </div>
        ): null

    return (
        <div>
            {array}
        </div>
    )
}

export default connect(null, deleteApplication)(Applications);