import React from 'react';

function Companies({companies}) {

    const companiesArray = companies.map(company => <li key={company.id}>{company.name} : {company.address}</li>)

    return (
        <div>
            {companiesArray}
        </div>
    )
}

export default Companies;
