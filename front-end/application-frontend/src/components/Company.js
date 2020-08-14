import React from 'react'
import { Redirect } from 'react-router-dom';
import ApplicationsContainer from '../container/ApplicationsContainer'

function Company(props) {

    // console.log(props.companies)
    // let allCompanies = props.companies
    // console.log(allCompanies)
    // let company = allCompanies.filter(company => company.id === props.match.params.id)

    let company = props.companies[props.match.params.id - 1]


    return (
        <div>
            {/* {company ? null : <Redirect to='/companies'></Redirect>} */}
            <h2>{company ? company.name : null} --- {company ? company.address : null}</h2>
            <ApplicationsContainer company={company} />
        </div>
    )
}

export default Company;