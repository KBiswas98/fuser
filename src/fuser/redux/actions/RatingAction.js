import { SAVE_RATING, RATING_LOADING, HAVING_RATING_REDUCER_ERROR } from "../config/constant"
import { database } from '../../config/firebase'
import _ from 'lodash'

const saveRating = (data) => {
    return {
        type: SAVE_RATING,
        payload: data
    }
}

const startRatingReducerLoading = () => {
    return {
        type: RATING_LOADING
    }
}

const haveingRatingReducerError = (err) => {
    return {
        type: HAVING_RATING_REDUCER_ERROR,
        payload: err
    }
}

export const GettingRatings = () => {
    return async dispatch => {

        dispatch(startRatingReducerLoading())

        let _Ratings = [];

        try {

           await database.ref('rating').once('value', (snapshot) => {
                snapshot.forEach((item, index) => {
                    
                    let _tmp = {
                        account_id: item.key,
                        rating:  _.meanBy(_.values(item.val()))
                    }

                    _Ratings.push(_tmp)
                    //console.log(_tmp)
                })
            })

            dispatch(saveRating(_Ratings))

        } catch (err) {

            dispatch(haveingRatingReducerError(err))
        }
    }
}

export const AppendReview = (id, num) => {
    return async dispatch => {

        dispatch(startRatingReducerLoading())
        //console.log(id , num)

        try {
            database.ref(`/rating/${id}/`).push( num)
        }
        catch (err) {
            //console.log(err)
        }
    }
}