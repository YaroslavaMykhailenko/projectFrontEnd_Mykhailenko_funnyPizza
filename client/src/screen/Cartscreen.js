import React from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useSelector, useDispatch } from 'react-redux'
import {addToCart} from '../actions/cartActions'
import {deleteFromCart} from '../actions/cartActions'
import Checkout from '../components/Checkout'
export default function Cartscreen() {
    AOS.init()
    const cartstate = useSelector(state => state.cartReducer)
    const cartItems = cartstate.cartItems
    var totalamount = cartItems.reduce((x , item)=> x + item.price, 0)
    const dispatch = useDispatch()
    function GoToMenu(){
        
        window.location.href='/'

    }
    return (
        <div>
            <div data-aos='fade-up' data-aos-duration="1000" className="row justify-content-center">
                <div className="col-md-6">
                    <h3 style={{ fontSize: '35px', fontFamily: 'Bebas Neue' }}>Мій кошик</h3>
                    {cartItems.map(item=>{
                        return  <div className="flex-container ">

                        <div className="text-left m-2 w-100">
                            <h1 >{item.name} ({item.varient})</h1>
                            <h1>Ціна : {item.quantity}*{item.prices[0][item.varient]} = {item.price}</h1>
                            <h1 style={{display : 'inline'}}>Кількість : </h1>
                            <i className="fa fa-plus" aria-hidden='true' onClick={()=>{dispatch(addToCart(item, item.quantity+1, item.varient))}}></i>
                            <b className="quantity">{item.quantity}</b>
                            <i className="fa fa-minus" aria-hidden='true' onClick={()=>{dispatch(addToCart(item, item.quantity-1, item.varient))}}></i>
                            <hr/>    
                        </div>
                        
                        <div className="m-1 p-1">
                        <img src={item.image} style={{height:"120px", height:'120px'}}></img>
    
                        </div>
                        
                        <div className="m-1 w-100">
                        <i className="fa fa-trash mt-5" aria-hidden='true' onClick={()=>{dispatch(deleteFromCart(item))}}></i>    
                        </div>
                </div>

                    })}



                </div>

                <div className="col-md-4">
                    <h2 style={{fontSize:'35px', fontFamily: 'Bebas Neue'}}>Загальна ціна замовлення :</h2>
                    <h2 style={{fontSize:'35px', fontFamily: 'Bebas Neue'}}>{totalamount} ₴</h2>
                    {/* <button className="btn m-1" style={{fontSize:'20px',fontFamily: 'Bebas Neue'}}>Перейти до оплати</button> */}
                    {/* <div className='btn'> */}
                    <Checkout totalamount={totalamount}/>
                    {/* </div> */}
                    <button  className="btn m-4" style={{fontSize:'18px',fontFamily: 'Bebas Neue', width:"250px", height : "45px"}} onClick={GoToMenu}>Повернутися до меню</button>
                    

                </div>


            </div>
        </div>
    )

}