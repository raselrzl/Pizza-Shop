import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../actions/pizzaActions'
import Error from '../components/Error'
import Filter from '../components/Filter'
import Loading from '../components/Loading'
import Pizza from '../components/Pizza'
export default function Home() {
  const dispatch=useDispatch()
  const pizzasstate=useSelector(state=>state.getAllPizzasReducer)

  const {pizzas, error, loading}=pizzasstate
  useEffect(() => {
    dispatch(getAllPizzas())
  }, [])
  
  return (
    <>
    <Filter />
    <div className='griv-view'>      
        <div className='items'>
            {loading?(<Loading/>):error?(<Error error="OH NOOO! You Got an Error!"/>):(
              pizzas.map(pizza=>{
                return (
                    <div className='card shadow-lg p-3 mb-1 bg-white rounded' key={pizza.name}>                        
                            <Pizza pizza={pizza}/>                                              
                    </div>
                )
            })
            )}
        </div>
    </div>
    </>
  )
}
