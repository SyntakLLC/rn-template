import { createStore } from 'redux'

const initialState = {
    isLoggedIn: false, // if false, we give login screen
}

// The Redux change state functions
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_IS_LOGGED_IN':
            return { ...state, isLoggedIn: action.payload }
        default:
            return state
    }
}

const store = createStore(reducer)
export default store
