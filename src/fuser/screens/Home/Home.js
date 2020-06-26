import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import './_home.scss'
import { useDispatch, useSelector } from 'react-redux'
import { GettingUsers } from '../../redux/actions/UserAction';
import { GettingApps } from '../../redux/actions/AppAction';
import StarRatings from 'react-star-ratings'
import { GettingRatings, AppendReview } from '../../redux/actions/RatingAction';

export default function Home() {
    const dispatch = useDispatch();
    const { users, isUserLoading } = useSelector(state => state.UserReducer)
    const { app, isAppLoading } = useSelector(state => state.AppReducer)

    useEffect(() => {
        dispatch(GettingUsers())
        dispatch(GettingApps())
        dispatch(GettingRatings())
    }, [])

    

    return (
        <section className="output">
            <div class="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>account id</th>
                            <th>apps</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="tbl-content">
                <table cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                        {
                            users.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.account_id}</td>

                                    <td>
                                        {app.length <= 0 ? <p>No data found.</p> : _.values(
                                            _.find(app, ['key', item.account_id]).value.apps)
                                                .map(xitem => <StarAndApps title={xitem.title} xkey={item.account_id} />)}</td>

                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}



function StarAndApps({ title, xkey }) {
    const { rating } = useSelector(state => state.RatingReducer)
    const [_rating, setrating] = useState(0)
    const dispatch = useDispatch()

    const changeRating = (newRating) => {
        setrating(newRating)
        dispatch(AppendReview(xkey, newRating))
    }

    useEffect(() => {
        setrating(_.find(rating, ['account_id', xkey ]) === undefined ? 0 : _.find(rating, ['account_id', xkey ]).rating)
    }, [rating])

    return (
        <div>
            <p> {title}</p>
            <StarRatings
                rating={_rating}
                starRatedColor="yellow"
                changeRating={changeRating}
                numberOfStars={5}
                name='rating'
                starDimension="20px"
            />

        </div>
    )
}

