import React from 'react';
import { Route, Link } from 'react-router-dom'

function Companies({companies}) {

const companiesArray = companies.map(company => 
    <div key={company.id}>
        <Link className='companies' to={`company/${company.id}`} > {company.name} </Link> 
    </div>)

    return (
        <div>
            <h2>Companies</h2>
            {companiesArray}
        </div>
    )
}

export default Companies;
