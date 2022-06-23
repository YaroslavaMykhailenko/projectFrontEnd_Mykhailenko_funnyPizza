

import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom';
// import { BrowserRouter,  Routes,  Route} from "react-router-dom"
import Addnewpizza from "./Addnewpizza"
import Orderslist from "./Orderslist"
import Pizzaslist from "./Pizzaslist"
import Userslist from "./Userslist"


export default function Adminpage() {
    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(currentUser.isAdmin)
        
        if (!currentUser.isAdmin) {
            window.location.href = "/"
        }
    }, [])

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-10 ">
                    <h2 style={{ fontSize: '35px', fontFamily: 'Bebas Neue' }}>Сторінка адміністратора</h2>
                    <ul className="adminpanel">
                        <li><Link to={'/admin/userslist'}>Список користувачів</Link></li>
                        <li><Link to={'/admin/pizzaslist'} >Піци</Link></li>
                        <li><Link to={'/admin/addnewpizza'}>Додати Піцу</Link></li>
                        <li><Link to={'/admin/orderslist'}>Список замовлень</Link></li>

                        
                    </ul>


                </div>

            </div>

        </div>
    )
}