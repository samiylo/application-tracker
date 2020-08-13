import React from 'react'

function Company({company}) {
    return (
        <div>
            <div key={company.id}>{company.name} {company.address}</div>
        </div>
    )
}

export default Company;