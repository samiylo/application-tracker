
export function addCompany(data) {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/companies', {
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => dispatch({
            type: 'ADD_COMPANY',
            payload: data
        }))
    }
}
