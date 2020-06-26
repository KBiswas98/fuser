const initialState = {
    app: [],
    isAppLoading : false,
    haveingErrorInAppReducer: []
}

const AppReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SAVE_APP':
            return {
                ...state,
                app:  action.payload ,
                isAppLoading: false
            }
        case 'APP_LOADING': 
            return {
                ...state,
                isAppLoading: false
            }
        case 'HAVING_APP_REDUCER_ERROR': 
            return {
                ...state,
                haveingErrorInAppReducer: action.payload,
                isAppLoading: false
            }
        default: 
            return state;
        
    }
}

export default AppReducer;