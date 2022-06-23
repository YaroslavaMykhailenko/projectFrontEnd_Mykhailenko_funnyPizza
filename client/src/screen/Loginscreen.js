import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loginUser } from "../actions/userActions"
import Error from "../components/Error"
import Loading from "../components/Loading"

export default function Loginscreen(){

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const loginstate = useSelector(state=>state.loginUserReducer)
    const {loading, error} = loginstate
    const dispatch = useDispatch()
    useEffect(()=>{
        if (localStorage.getItem('currentUser')){
            window.location.href='/'

        }

    }, [])


    function login(){
        const user={email, password}
        dispatch(loginUser(user))        


    }

    return(
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 shadow p-3 mb-5 bg-white rounded">
                    <h2 style={{ fontSize: '30px', fontFamily: 'Bebas Neue' }}>Авторизація</h2>
                    {loading && <Loading/>}
                    {error && <Error error='Дані некоректні!😞'/>}
                    <div style={{fontFamily: 'Vollkorn' }}>
                        <input required type='text' placeholder="Пошта.." className='form-control' value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <input required type='text' placeholder="Пароль.." className='form-control' value={password} onChange={(e) => { setpassword(e.target.value) }} />
                        <button className='btn mt-3' style={{ fontSize: '19px', fontFamily: 'Bebas Neue', marginLeft:'10px' }} onClick={login}>Увійти в систему</button>
                        <br></br>
                        <h2 style={{display : 'inline', fontSize:'18px'}}>Не маєте аккаунту?</h2>
                        <a className='links' href="/register" style={{display : 'inline', fontSize:'19px', color:"crimson", margin:'10px'}}>Заереструватись🙂</a>

                    </div>


                </div>
            </div>
        </div>
    )
}