export function addApplication(application, companyID) {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/companies/${companyID}/applications`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(application)
        })
        .then(response => response.json())
        .then(company =>  dispatch({type: 'ADD_APPLICATION', payload: company}))
    }
}