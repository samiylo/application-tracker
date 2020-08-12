export function fetchCompanies(action) {

    fetch('http://localhost:3000/api/v1/companies')
    .then(response => response.json())
    .then(data => console.log(data))
}