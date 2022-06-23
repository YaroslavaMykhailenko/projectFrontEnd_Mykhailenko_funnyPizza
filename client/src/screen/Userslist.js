import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../actions/userActions'
import { deleteUser } from '../actions/userActions'
import Loading from '../components/Loading'
import Error from '../components/Error'
export default function Userslist() {
    const dispatch = useDispatch()
    const usersstate = useSelector(state => state.getAllUsersReducer)
    const { error, loading, users } = usersstate

    const currentstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = currentstate

    useEffect(() => {

        dispatch(getAllUsers())
        if (!currentUser.isAdmin) {
            window.location.href = "/"
        }

    }, [])


    return (
        <div className="row justify-content-center">

            <div className="col-md-10">
                <h2 style={{ fontSize: '35px', fontFamily: 'Bebas Neue' }}>Сторінка адміністратора</h2>
                <ul className="adminpanel">
                    <li><Link to={'/admin/userslist'}>Список користувачів</Link></li>
                    <li><Link to={'/admin/pizzaslist'} >Піци</Link></li>
                    <li><Link to={'/admin/addnewpizza'}>Додати Піцу</Link></li>
                    <li><Link to={'/admin/orderslist'}>Список замовлень</Link></li>


                </ul>

                <h1>Список користувачів</h1>
                {loading && <Loading />}
                {error && <Error error="Щось пішло не так" />}
                <table className='table table-striped table-bordered table-responsive-sm'>
                    <thead>
                        <tr>
                            <th>Id Користувача</th>
                            <th>Ім'я</th>
                            <th>Пошта</th>
                            <th>Видалити користувача</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users && users.map(user => {
                            return <tr>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><i className='fa fa-trash' onClick={() => { dispatch(deleteUser(user._id)) }}></i></td>
                            </tr>
                        })}
                    </tbody>

                </table>


            </div>


        </div>
    )
}