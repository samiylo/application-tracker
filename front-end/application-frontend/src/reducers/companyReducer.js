// When an action is called, the previous state is passed
export default function companyReducer(state = {companies: []}, action) {

    switch (action.type) {
        case 'FETCH_COMPANIES':
            return { companies: action.payload }

        default:
            return state
    }


}