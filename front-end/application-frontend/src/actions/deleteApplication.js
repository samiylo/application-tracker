// import { connect } from 'react-redux'

export function deleteApplication(applicationId, companyID ) {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/companies/${companyID}/applications/${applicationId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },

        })
        .then(response => response.json())
        .then(company => dispatch({type: 'DELETE_APPLICATION', payload: company}))
    }
}
