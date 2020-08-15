// When an action is called, the previous state is passed
export default function companyReducer(state = {companies: []}, action) {

    switch (action.type) {
        case 'FETCH_COMPANIES':
            return { companies: action.payload }

        case 'ADD_COMPANY':
            return {...state, companies: [...state.companies, action.payload]}

        case 'ADD_APPLICATION':
        let companies = state.companies.map(company => {
                if (company.id = action.payload.id) {
                    return action.payload
                } else {
                    return company
                }
                })
            return companies

            case 'DELETE_APPLICATION':
                let companiestwo = state.companies.map(company => {
                        if (company.id = action.payload.id) {
                            return action.payload
                        } else {
                            return company
                        }
                        })
                return companiestwo

            case 'EDIT_COMPANY':
                let companiesthree = state.companies.map(company => {
                    if (company.id = action.payload.id) {
                        return action.payload
                    } else {
                        return company
                    }
                    })
            return companiesthree

        default:
            return state
    }


}