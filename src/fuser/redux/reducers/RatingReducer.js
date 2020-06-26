const initialState = {
    rating: [],
    isRatingLoading : false,
    haveingErrorInRatingReducer: []
}

const RatingReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SAVE_RATING':
            return {
                ...state,
                rating: [...state.rating, action.payload ],
                isRatingLoading: false
            }
        case 'RATING_LOADING': 
            return {
                ...state,
                isRatingLoading: false
            }
        case 'HAVING_RATING_REDUCER_ERROR': 
            return {
                ...state,
                haveingErrorInRatingReducer: action.payload,
                isRatingLoading: false
            }
        default: 
            return state;
        
    }
}

export default RatingReducer;