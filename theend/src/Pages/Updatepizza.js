import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { editPizza, getPizzaById } from '../actions/pizzaActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'
export default function Updatepizza() {
    const [name, setName]=useState('')
    const [smallvarientprice, setSmallVarientPrice]=useState()
    const [mediumvarientprice, setMediumvarientprice]=useState()
    const [largevarientprice, setLargevarientprice]=useState()
    const [image, setImage]=useState('')
    const [description, setDescription]=useState('')
    const [category, setCategory]=useState('')

    const getpizzabyidstate=useSelector(state=>state.getPizzaByIdReducer)
    const {pizza, error, loading}=getpizzabyidstate

    console.log(error)
    const editpizzastate=useSelector(state=>state.editPizzaReducer)
    const {editsuccess, editerror, editloading}=editpizzastate

    const dispatch=useDispatch()
    const { pizzaid } = useParams()

    useEffect(()=>{
      if(pizza){
        if(pizza._id===pizzaid){
          setName(pizza.name)
          setImage(pizza.image)
          setDescription(pizza.description)
          setCategory(pizza.category)
          setSmallVarientPrice(pizza.prices[0]['small'])
          setMediumvarientprice(pizza.prices[0]['medium'])
          setLargevarientprice(pizza.prices[0]['large'])
        }else{
          dispatch(getPizzaById(pizzaid))
        }
      }else{
        dispatch(getPizzaById(pizzaid))
      }
    },[pizza,dispatch])

    const handleSubmit=(e)=>{
        e.preventDefault()
        const editedpizza={
          _id:pizzaid,
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
        console.log(editedpizza)
        dispatch(editPizza(editedpizza))
      }
  return (
    <div className='shadow p-3 mb-5 bg-white rounded'>
        <h1>Edit Pizza</h1>
        <div className='add-new-product'>
          {loading && (<Loading />)}
          {editloading && (<Loading />)}
          {editerror && (<Error error='something went wrong'/>)}
          {editsuccess &&(<Success success='Pizza details Edited Successfully'/>)}

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
           <button className='btn mt-3' type='submit'>Edit Product</button>
         </form>
      </div>     
    </div>
  )
}
