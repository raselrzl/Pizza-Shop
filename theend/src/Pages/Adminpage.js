import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Routes,Route, Link } from 'react-router-dom';

import Addnewpizza from './Addnewpizza'
import Orederslist from './Orederslist'
import Pizzaslist from './Pizzaslist'
import Updatepizza from './Updatepizza';
import Userlist from './Userlist'
export default function Adminpage() {
    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch=useDispatch()
    console.log(dispatch)

    useEffect(()=>{
        if(!currentUser.isAdmin){
                window.location.href='/'
        }
    },[])
  return (
    <div className='admin-pannel p-4'>
        <h5 className='title'>Admin Pannel</h5>
        <ul className='Admin-function'>
            <li><Link to={'/admin/userlist'} style={{color:'white'}}>Userslist</Link></li>
            <li><Link to={'/admin/pizzaslist'} style={{color:'white'}}>Pizzas-list</Link></li>
            <li><Link to={'/admin/addnewpizza'} style={{color:'white'}}>Add-new-pizza</Link></li>
            <li><Link to={'/admin/orederslist'} style={{color:'white'}}>Oreders-list</Link></li>
        </ul>
        <Routes>
        
            <Route path="/addnewpizza" element={<Addnewpizza/>}/>
            <Route path='/orederslist' element={<Orederslist/>} />
            <Route path='/pizzaslist' element={<Pizzaslist/>}/>
            <Route path='/userlist' element={<Userlist/>}/>
            <Route path='/editpizza/:pizzaid' element={<Updatepizza/>}/>
         
    </Routes>
                   
      
    </div>
  )
}
