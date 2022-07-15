import React, { useState } from 'react'
import { addPizza } from '../actions/pizzaActions'
import {useDispatch, useSelector} from 'react-redux'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'


export default function Addnewpizza() {
  const [name, setName]=useState('')
  const [smallvarientprice, setSmallVarientPrice]=useState()
  const [mediumvarientprice, setMediumvarientprice]=useState()
  const [largevarientprice, setLargevarientprice]=useState()
  const [image, setImage]=useState('')
  const [description, setDescription]=useState('')
  const [category, setCategory]=useState('')

  const dispatch=useDispatch()

  const addpizzastate=useSelector(state=>state.addPizzaReducer)

  const {success, error, loading}=addpizzastate

  const handleSubmit=(e)=>{
    e.preventDefault()
    const pizza={
      name,
      image,
      description,
      category,
      prices:{
        small:smallvarientprice,
        medium: mediumvarientprice,
        large:largevarientprice,
      }
    }
    console.log(pizza)
    dispatch(addPizza(pizza))
  }
  return (
    <div>
      <div className='add-new-product shadow p-3 mb-5 bg-white rounded'>
         <h2>Add New Pizza</h2>

          {loading && (<Loading />)}
          {success && (<Success success='New pizza added Successfully' />)}
          {error && (<Error error='something went wrong'/>)}

         <form onSubmit={handleSubmit}>
              <input 
                  className='form-control' 
                  type='text' 
                  placeholder='Name' 
                  value={name} 
                  onChange={(e)=>{setName(e.target.value)}}
              />  
              <input 
                  className='form-control' 
                  type='number' 
                  placeholder='smallvarientprice' 
                  value={smallvarientprice} 
                  onChange={(e)=>{setSmallVarientPrice(e.target.value)}}
              /> 
              <input 
                  className='form-control' 
                  type='number' 
                  placeholder='mediumvarientprice' 
                  value={mediumvarientprice} 
                  onChange={(e)=>{setMediumvarientprice(e.target.value)}}
              /> 
              <input 
                  className='form-control' 
                  type='number' 
                  placeholder='Largevarientprice' 
                  value={largevarientprice} 
                  onChange={(e)=>{setLargevarientprice(e.target.value)}}
              /> 
              <input 
                  className='form-control' 
                  type='text' 
                  placeholder='Image-link' 
                  value={image} 
                  onChange={(e)=>{setImage(e.target.value)}}
              /> 
              <input 
                  className='form-control' 
                  type='text' 
                  placeholder='Description' 
                  value={description} 
                  onChange={(e)=>{setDescription(e.target.value)}}
              /> 
              <input 
                  className='form-control' 
                  type='text' 
                  placeholder='Category' 
                  value={category} 
                  onChange={(e)=>{setCategory(e.target.value)}}
              />           
           <button className='btn mt-3' type='submit'>Add Product</button>
         </form>
      </div>        
    </div>
  )
}
