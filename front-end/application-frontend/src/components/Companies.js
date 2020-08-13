import React from 'react';
import Company from './Company'

function Companies({companies}) {

    const companiesArray = companies.map(company => <Company key={company.id} company={company} />)

    return (
        <div>
            {companiesArray}
        </div>
    )
}

export default Companies;
