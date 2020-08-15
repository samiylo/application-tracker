export function editCompany(data) {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/companies/${data.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            },
            method: "PATCH",
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(company => dispatch({
            type: 'EDIT_COMPANY',
            payload: company
        }))
    }

}