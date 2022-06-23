import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderActions'
import Error from "../components/Error"
import Loading from "../components/Loading"
import Success from '../components/Success'
export default function Checkout({totalamount}) {

    const orderstate = useSelector((state) => state.placeOrderReducer)

    const {loading , error , success} = orderstate    
    
    const dispatch = useDispatch()
    function tokenHandler(token)
    {
        console.log(token);
        dispatch(placeOrder(token , totalamount))

    }

    return (
        <div>
            
            {loading && (<Loading/>)}
            {error && (<Error error='Щось пішло не по плану😞'/>)}
            {success && (<Success success='Платіж успішний. Ваше замовлення прийнято!😀'/>)}

            <StripeCheckout
            amount={totalamount*100}
            shippingAddress
            token={tokenHandler}
            stripeKey='pk_test_51LD6YGG0CkHymctW7x0ugp8QTFzwxt33ZNngptcg2RjENhO8Vqr8chj9d4TQSKVBCu0lYQzengwycMfwCyMHRFQ400yjTSMPjX'
            currency='UAH'
            >

                  
                  <a className='btn p-2'  style={{fontFamily: 'Bebas Neue', fontSize: "18px", backgroundColor: "green", textDecoration : 'none', color: 'white', width: '250px'}}>Сплатити</a>

            </StripeCheckout>
            
        </div>
    )
}