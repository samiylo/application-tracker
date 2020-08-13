import React from 'react';
// import Company from './Company'
import { Route, Link } from 'react-router-dom'

function Companies({companies}) {

const companiesArray = companies.map(company => 
    <div key={company.id}>
        <Link to={`company/${company.id}`} > {company.name} </Link> 
    </div>)

    return (
        <div>
            {companiesArray}
            {/* {console.log(companies)} */}
        </div>
    )
}

export default Companies;
