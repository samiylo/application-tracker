import React from 'react'

function Applications({applications}) {

    let array = applications ? applications.map(application =>
        <div key={application.id}>
            <h3>{application.position}</h3>
            <p>
                {application.description}
            </p>
        </div>
        ): null
    return (
        <div>
            {array}
        </div>
    )
}

export default Applications;