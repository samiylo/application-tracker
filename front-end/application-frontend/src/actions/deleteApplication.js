// import { connect } from 'react-redux'

export function deleteApplication(applicationId, companyID ) {
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/companies/${companyID}/applications/${applicationId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(company => dispatch({type: 'DELETE_APPLICATION', payload: company}))
        .catch(error => window.alert("This application was deleted"))
    }
}
