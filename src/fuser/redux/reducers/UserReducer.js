const initialState = {
    users: [],
    isUserLoading : false,
    haveingErrorInUserReducer: []
}

const UserReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SAVE_USER':
            return {
                ...state,
                users:  action.payload ,
                isUserLoading: false
            }
        case 'USER_LOADING': 
            return {
                ...state,
                isUserLoading: false
            }
        case 'HAVING_USER_REDUCER_ERROR': 
            return {
                ...state,
                haveingErrorInUserReducer: action.payload,
                isUserLoading: false
            }
        default: 
            return state;
        
    }
}

export default UserReducer