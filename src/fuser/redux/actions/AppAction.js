import { SAVE_APP, APP_LOADING, HAVING_APP_REDUCER_ERROR } from "../config/constant"
import { database } from '../../config/firebase'

const saveApp = (data) => {
    return {
        type: SAVE_APP,
        payload: data
    }
}

const startAppReducerLoading = () => {
    return {
        type: APP_LOADING
    }
}

const haveingAppReducerError = (err) => {
    return {
        type: HAVING_APP_REDUCER_ERROR,
        payload: err
    }
}

export const GettingApps = () => {
    return async dispatch => {

        dispatch(startAppReducerLoading())

        let _apps = [];

        try {

           await database.ref('accounts').once('value', (snapshot) => {
                snapshot.forEach((item, index) => {
                    let _tmp = {
                        key: item.key,
                        value: item.val()
                    }
                    _apps.push(_tmp)
                    // console.log(_tmp)
                })
            })

            dispatch(saveApp(_apps))

        } catch (err) {

            dispatch(haveingAppReducerError(err))
        }
    }
}