import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../actions/orderActions'
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from '../components/Success'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Ordersscreen() {

    AOS.init()
    const dispatch = useDispatch()
    const orderstate = useSelector(state => state.getUserOrdersReducer)
    const { orders, error, loading } = orderstate

    useEffect(() => {

        dispatch(getUserOrders())

    }, [])

    return (
        <div>
            <h2 style={{ fontSize: '35px', fontFamily: 'Bebas Neue' }}>Мої замовлення</h2>
            <hr />
            {/* <br/> */}
            <div className="row justify-content-center">
                {loading && (<Loading />)}
                {error && (<Error error='Щось не так(' />)}
                {orders && orders.map(order=>{
                    return <div className="col-md-8 m-2" data-aos='fade-up' data-aos-duration="1000" style={{backgroundColor : "lightgreen" , color:'black', borderRadius: '7px'}}>

                            <div className="flex-container">
                                <div className='text-left w-100 m-1'>
                                    <h2 style={{fontSize: '25px', fontFamily: 'Bebas Neue' }}>Піца</h2>
                                    <hr/>
                                    {order.orderItems.map(item=>{
                                        return <div>
                                            <p style={{fontSize: '20px', fontFamily: 'Bebas Neue' }}>{item.name} [{item.varient}] * {item.quantity} = {item.price}</p>
                                        </div>
                                    })}
                                    </div>
                                <div className='text-left w-100 m-1'>
                                   
                                <h2 style={{fontSize: '25px', fontFamily: 'Bebas Neue' }}>Адреса доставки</h2>
                                <hr/>
                                <div style={{fontSize: '18px', fontFamily: 'Bebas Neue' }}>
                                <p style={{fontFamily: 'Bebas Neue' }}>Вулиця : {order.shippingAddress.street}</p>
                                <p style={{fontFamily: 'Bebas Neue' }}>Місто : {order.shippingAddress.city}</p>
                                <p style={{fontFamily: 'Bebas Neue' }}>Країна : {order.shippingAddress.country}</p>
                                <p style={{fontFamily: 'Bebas Neue' }}>Поштовий індекс : {order.shippingAddress.pincode}</p>
                                </div>
                                </div>
                                <div className='text-left w-100 m-1'>
                                <h2 style={{ fontSize: '25px', fontFamily: 'Bebas Neue' }}>Інформація</h2>
                                <hr/>
                                <div style={{fontSize: '18px', fontFamily: 'Bebas Neue' }}>
                                <p >Ціна замовлення : {order.orderAmount} ₴</p>
                                <p >Дата замовлення : {order.createdAt.substring(0,10)}</p>
                                <p >Id транзакції : {order.transactionId}</p>
                                <p >Id замовлення : {order._id}</p>
                                </div>
                                </div>
                            </div>

                    </div>
                })}
            </div>
        </div>
    )
}
           