import React from 'react'
// import { Redirect } from 'react-router-dom';
import ApplicationsContainer from '../container/ApplicationsContainer'

function Company(props) {

    console.log(props.companies)
    console.log(props.match.params.id)

    let company = props.companies.find(company => company.id == props.match.params.id)
    console.log(company)



    return (
        <div>
            {/* {company ? null : <Redirect to='/companies'></Redirect>} */}
            <h2>{company ? company.name : null} --- {company ? company.address : null}</h2>
            <ApplicationsContainer company={company} />
        </div>
    )
}

export default Company;