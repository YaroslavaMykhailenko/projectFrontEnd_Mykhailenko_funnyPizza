import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Searchbar from '../components/Searchbar'
import { getAllPizzas, deletePizza } from '../actions/pizzaActions'
export default function Pizzaslist() {

    const dispatch = useDispatch();

    const pizzasstate = useSelector((state) => state.getAllPizzasReducer)

    const { pizzas, error, loading } = pizzasstate
    console.log(pizzas)

    useEffect(() => {

        dispatch(getAllPizzas())
        
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
                <h1>Піци</h1>
                {loading && (<Loading />)}
                {error && (<Error error='Щось пішло не так' />)}
                <table className='table table-striped table-bordered table-responsive-sm'>

                    <thead >
                        <tr>
                            <th>Назва</th>
                            <th>Ціна</th>
                            <th>Вид піци</th>
                            <th>Видалити/Редагувати</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pizzas && pizzas.map(pizza => {
                            return <tr>
                                <td>{pizza.name}</td>
                                <td>
                                    Маленька : {pizza.prices[0]['маленька']}
                                    <br></br>
                                    Середня : {pizza.prices[0]['середня']}
                                    <br></br>
                                    Велика : {pizza.prices[0]['велика']}

                                </td>
                                <td>{pizza.category}</td>
                                <td>
                                    <i className="fa fa-trash m-1" onClick={()=>{dispatch(deletePizza(pizza._id))}}></i>
                                    <Link to={`/admin/editpizza/${pizza._id}`}><i className="fa fa-edit m-1"></i></Link>
                                </td>
                            </tr>

                        })}
                    </tbody>

                </table>


            </div>






        </div>
    )
}