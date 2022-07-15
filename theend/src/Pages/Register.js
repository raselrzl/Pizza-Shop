import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { registerUser } from '../actions/userActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const registerstate=useSelector(state=>state.registerUserReducer)
    const {error, loading, success}=registerstate
    const dispatch=useDispatch()
    function register(){
        if(password!==confirmpassword){
            alert('password not matched')
        }else{
            const user={
                name,
                email,
                password
            }
            console.log(user)
            dispatch(registerUser(user))
        }
    }
    return (
        <div className='register' data-aos="fade-right">
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5 mt-5 shadow p-3 mb-5 bg-white rounded'>

                    {loading && (<Loading />)}
                    {success && (<Success success='User Registered Successfully' />)}
                    {error && (<Error error='Eamil Already Registered'/>)}

                    <h2 className='register-title m-2'>Register</h2>
                    <div>
                        <input 
                            value={name} 
                            onChange={(e)=>{setName(e.target.value)}}
                            type="text" 
                            placeholder='Name' 
                            className='form-control' 
                            required
                        />
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
                        <input 
                            value={confirmpassword} 
                            onChange={(e)=>{setConfirmPassword(e.target.value)}}
                            type="password" 
                            placeholder='Confirm Passsword' 
                            className='form-control' 
                            required
                        />

                        <button className='btn mt-3 mb-3' onClick={register}>Register</button>
                        <br/>
                        <a href='/login' className='Login-register-link'>Click Here To Login</a>
                    </div>

                </div>
            </div>
        </div>
    )
}
