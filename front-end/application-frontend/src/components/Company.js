import React from 'react'
// import { Redirect } from 'react-router-dom';
import ApplicationsContainer from '../container/ApplicationsContainer'
import  CompanyEdit from './CompanyEdit'

function Company(props) {

    // console.log(props.companies)
    // console.log(props.match.params.id)

    let company =  props.companies ? props.companies.find(company => company.id == props.match.params.id) : null
    // console.log(company)



    return (
        <div>
            {/* {company ? null : <Redirect to='/companies'></Redirect>} */}
            
            <h2>{company ? company.name : null}</h2> <h4>{company ? company.address : null}</h4>
            <h3>Edit Company</h3>
            <CompanyEdit company={company} />
            <h3>Add Application</h3>
            <ApplicationsContainer company={company} />
        </div>
    )
}

export default Company;