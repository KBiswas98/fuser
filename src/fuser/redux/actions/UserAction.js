import { SAVE_USER, USER_LOADING, HAVING_USER_REDUCER_ERROR } from "../config/constant"
import { database } from '../../config/firebase'

const saveUser = (data) => {
    return {
        type: SAVE_USER,
        payload: data
    }
}

const startUserReducerLoading = () => {
    return {
        type: USER_LOADING
    }
}

const haveingUserReducerError = (err) => {
    return {
        type: HAVING_USER_REDUCER_ERROR,
        payload: err
    }
}

export const GettingUsers = () => {
    return async dispatch => {

        dispatch(startUserReducerLoading())

        let _users = [];

        try {

           await database.ref('users').once('value', (snapshot) => {
                snapshot.forEach((item, index) => {
                    let _tmp = {
                        account_id: item.val().account,
                        name: item.val().name
                    }
                    _users.push(_tmp)
                })
            })

            dispatch(saveUser(_users))

        } catch (err) {

            dispatch(haveingUserReducerError(err))
        }
    }
}