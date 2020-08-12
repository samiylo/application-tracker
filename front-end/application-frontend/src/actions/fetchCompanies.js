export function fetchCompanies(action) {
    // THUNK will allow us to use dipsatch in this action creator

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/companies')
        .then(response => response.json())
        .then(data => dispatch({
            type: 'FETCH_COMPANIES',
            payload: data
        }))
    }


}