import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading'
import Error from '../components/Error'

import Searchbar from '../components/Searchbar'
import { getAllOrders } from '../actions/orderActions'
import { deliverOrder } from '../actions/orderActions'

export default function Orderslist() {

    const dispatch = useDispatch()
    const getordersstate = useSelector(state => state.getAllOrdersReducer)
    const { loading, error, orders } = getordersstate

    useEffect(() => {
        dispatch(getAllOrders());
    }, [])

    return (
        <div className="row justify-content-center">

            <div  className="col-md-10">
                <h2 style={{ fontSize: '35px', fontFamily: 'Bebas Neue' }}>Сторінка адміністратора</h2>
                <ul className="adminpanel">
                    <li><Link to={'/admin/userslist'}>Список користувачів</Link></li>
                    <li><Link to={'/admin/pizzaslist'} >Піци</Link></li>
                    <li><Link to={'/admin/addnewpizza'}>Додати Піцу</Link></li>
                    <li><Link to={'/admin/orderslist'}>Список замовлень</Link></li>


                </ul>
                <h1>Список замовлень</h1>
                {loading && <Loading />}
                {error && <Error error="Щось пішло не так!" />}
                <table   className="table table-striped table-bordered table-responsive-sm">
                    <thead >
                        <tr>
                            <th>Id замовлення</th>
                            <th>Пошта</th>
                            <th>Id користувача</th>
                            <th>Ціна</th>
                            <th>Дата</th>
                            <th>Статус замовлення</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders && orders.map(order => {
                            return (
                                <tr>
                                    <td>{order._id}</td>
                                    <td>{order.email}</td>
                                    <td>{order.userid}</td>
                                    <td>{order.orderAmount}</td>
                                    <td>{order.createdAt.substring(0, 10)}</td>
                                    <td>{order.isDelivered ? (<h2 style={{fontSize:'20px', color: 'darkgreen'}}>Замовлення доставлено</h2>) : (<button className="button-deliver" style={{backgroundColor: 'crimson', color:'white', borderRadius:'4px', borderColor: 'crimson'}} onClick={() => { dispatch(deliverOrder(order._id)) }}>Відправити</button>
                                        )}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>


            </div>



        </div>
    )
}