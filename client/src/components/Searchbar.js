import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPizzas } from "../actions/pizzaActions";

export default function Searchbar() {
    const dispatch = useDispatch()
    const[searchpizza , setsearchpizza] = useState('')
    const[category , setcategory] = useState('all')
    return (
        <div className='container'>
            <div className="row justify-content-center shadow p-3 mb-5 bg-white rounded">

                    <div className="col-md-3">
                      <input  type="text" onChange={(e)=>{setsearchpizza(e.target.value)}} value={searchpizza} className="form-control w-100" placeholder="Знайти улюблену піцу.."/>
                    </div>
                    <div className="col-md-3">
                        <select className="form-control w-100 mt-2" value={category} onChange={(e)=>setcategory(e.target.value)}>
                            <option value="all">Всі типи</option>
                            <option value="вегетеріанська">Вегетеріанська</option>
                            <option value="не вегетеріанська">Не вегетеріанська</option>
                        </select>
                    </div>
                    <div className="col-md-3 ">
                       <button className='button w-100 mt-2' style={{backgroundColor : "lightsalmon"}} onClick={()=>(dispatch(filterPizzas(searchpizza, category)))}>Пошук</button>
                    </div>

            </div>
        </div>
    )
}