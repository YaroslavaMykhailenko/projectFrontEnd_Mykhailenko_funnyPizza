import React, {useState, useEffect} from 'react'
import Pizza from '../components/Pizza'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../actions/pizzaActions'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Searchbar from '../components/Searchbar'
// import { getAllPizzasReducer } from '../reducers/pizzaReducers'

export default function Homepage() {

    const dispatch = useDispatch()

    const pizzasstate = useSelector((state) => state.getAllPizzasReducer)

    const { pizzas, error, loading} = pizzasstate

    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])

    return (

        <div>
            <Searchbar/>
            <div className="row justify-content-center">
                

                {loading ? (<Loading/>) : error ? (<Error error="Щось пішло не по плану😒"/>) : (
                    pizzas.map((pizza) => {

                        return (
                        <div className='col-md-3 m-4' key={pizza._id}>
                            <div>
                                <Pizza pizza={pizza} />
                            </div>
    
                        </div>
                        )
    
                    })

                )} 

            </div>

        </div>
    )
}