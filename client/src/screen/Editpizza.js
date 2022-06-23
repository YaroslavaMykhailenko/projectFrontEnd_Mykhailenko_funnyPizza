import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editPizza, getPizzaById } from "../actions/pizzaActions"
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Success from '../components/Success'


export default function Editpizza() {
    const [name, setname] = useState("")
    const [smallprice, setsmallprice] = useState()
    const [mediumprice, setmediumprice] = useState()
    const [largeprice, setlargeprice] = useState()
    const [image, setimage] = useState("")
    const [description, setdescription] = useState("")
    const [category, setcategory] = useState("")

    const dispatch = useDispatch()

    const getpizzabyidstate = useSelector(state => state.getPizzaByIdReducer)
    const { pizza, error, loading } = getpizzabyidstate
    const editpizzastate = useSelector(state => state.editPizzaReducer)
    const { editloading, editerror, editsuccess } = editpizzastate

    let { pizzaid } = useParams()
    useEffect(() => {
        // let { pizzaid } = useParams()
        if (pizza) {
            if (pizza._id == pizzaid) {
                setname(pizza.name)
                setdescription(pizza.description)
                setcategory(pizza.category)
                setsmallprice(pizza.prices[0]['маленька'])
                setmediumprice(pizza.prices[0]['середня'])
                setlargeprice(pizza.prices[0]['велика'])
                setimage(pizza.image)
            }
            else {
                dispatch(getPizzaById(pizzaid))
            }
        }
        else {
            dispatch(getPizzaById(pizzaid))

        }



    }, [pizza, dispatch])


    function formHandler(e) {

        e.preventDefault();

        const editedpizza = {
            _id : pizzaid,
            name,
            image,
            description,
            category,
            prices: {
                'маленька': Number(smallprice),
                'середня': Number(mediumprice),
                'велика': Number(largeprice)
            }
        }
        // console.log(updatedpizza)
        dispatch(editPizza(editedpizza))



    }



    return (
        <div className="row justify-content-center">

            <div className="col-md-10 shadow p-3 mb-5 bg-white rounded">
                <h2 style={{ fontSize: '35px', fontFamily: 'Bebas Neue' }}>Сторінка адміністратора</h2>
                <ul className="adminpanel">
                    <li><Link to={'/admin/userslist'}>Список користувачів</Link></li>
                    <li><Link to={'/admin/pizzaslist'} >Піци</Link></li>
                    <li><Link to={'/admin/addnewpizza'}>Додати Піцу</Link></li>
                    <li><Link to={'/admin/orderslist'}>Список замовлень</Link></li>


                </ul>
                <h1>Редагування даних</h1>
                
                <div>
                {loading && (<Loading />)}
                {error && (<Error error='Щось пішло не по плану' />)}
                {editsuccess && (<Success success='Інформація успішно відредагована' />)}
                {editloading && (<Loading />)}


                <form onSubmit={formHandler}>
                    <input className="form-control" type="text" placeholder="Назва" value={name} onChange={(e) => { setname(e.target.value) }} />
                    <input className="form-control" type="text" placeholder="Ціна за маленьку піцу" value={smallprice} onChange={(e) => { setsmallprice(e.target.value) }} />
                    <input className="form-control" type="text" placeholder="Ціна за середню піцу" value={mediumprice} onChange={(e) => { setmediumprice(e.target.value) }} />
                    <input className="form-control" type="text" placeholder="Ціна за велику піцу" value={largeprice} onChange={(e) => { setlargeprice(e.target.value) }} />
                    <input className="form-control" type="text" placeholder="Тип піци" value={category} onChange={(e) => { setcategory(e.target.value) }} />
                    <input className="form-control" type="text" placeholder="Опис" value={description} onChange={(e) => { setdescription(e.target.value) }} />
                    <input className="form-control" type="text" placeholder="Лінк на фото" value={image} onChange={(e) => { setimage(e.target.value) }} />
                    <button className='btn mt-3' type='submit'>Зберегти зміни</button>
                </form>
            </div>

        </div>

    </div>
    )



}