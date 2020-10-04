import React from 'react';
import ApplicationsContainer from '../container/ApplicationsContainer';
import  CompanyEdit from './CompanyEdit';

function Company(props) {

    let company =  props.companies ? props.companies.find(company => company.id == props.match.params.id) : null

    return (
        <div>
            <h2>{company ? company.name : null}</h2> <h4>{company ? company.address : null}</h4>

            <h3>Edit Company</h3>
            <CompanyEdit company={company} />
            <h3>Add Application</h3>
            <ApplicationsContainer company={company} />
        </div>
    )
}

export default Company;