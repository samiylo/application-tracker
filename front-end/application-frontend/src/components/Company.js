import React from 'react'

function Company(props) {

    let company = props.companies[props.match.params.id - 1]
    return (
        <div>
            {company ? company.name : null} --- {company ? company.address : null}
        </div>
    )
}

export default Company;