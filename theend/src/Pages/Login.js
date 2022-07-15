import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { loginUser } from '../actions/userActions'
import Error from '../components/Error'
import Loading from '../components/Loading'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const loginstate=useSelector(state=>state.loginUserReducer)
    const {loading, error}=loginstate
    const dispatch=useDispatch()

    useEffect(()=>{
        if(localStorage.getItem('currentUser')){
          window.location.href='/'
        }
    },[])

    function login(){
        const user={email, password }
        dispatch(loginUser(user))
    }
  return (
    <div className='login' data-aos="fade-left">
        <div className='row justify-content-center mt-3'>
                <div className='col-md-5 mt-5 shadow p-3 mb-5 bg-white rounded'>
                    <h2 className='login-title m-2'>Login</h2>
                    {loading && (<Loading />)}
                    {error &&(<Error error='Invalid Credentials' />)}
                    <div>
                        <input 
                            value={email} 
                            onChange={(e)=>{setEmail(e.target.value)}}
                            type="text" 
                            placeholder='Email' 
                            className='form-control' 
                            required
                        />
                        <input 
                            value={password} 
                            onChange={(e)=>{setPassword(e.target.value)}}
                            type="password" 
                            placeholder='Password' 
                            className='form-control' 
                            required
                        />
                        <button className='btn mt-3 mb-3' onClick={login}>Login</button>
                        <br/>
                        <a href='/register' className='Login-register-link'>Click Here To Register</a>
                    </div>

                </div>
            </div>
    </div>
  )
}
