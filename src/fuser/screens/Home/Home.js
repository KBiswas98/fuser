import React, { useEffect } from 'react'
import _ from 'lodash'
import './_home.scss'
import { useDispatch, useSelector } from 'react-redux'
import { GettingUsers } from '../../redux/actions/UserAction';
import { GettingApps } from '../../redux/actions/AppAction';

export default function Home() {
    const dispatch = useDispatch();
    const { users, isUserLoading } = useSelector(state => state.UserReducer)
    const { app, isAppLoading } = useSelector(state => state.AppReducer)


    useEffect(() => {
        dispatch(GettingUsers())
        dispatch(GettingApps())
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
                                
                                <td>{_.values(_.find(app, ['key', item.account_id]).value.apps).map(xitem => <p> {xitem.title}</p>)}</td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
        </section>
    )
}
