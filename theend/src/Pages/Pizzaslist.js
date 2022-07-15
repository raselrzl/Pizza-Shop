import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePizza, getAllPizzas } from '../actions/pizzaActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import {FaEdit, FaTrash} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Pizzaslist() {
  const dispatch=useDispatch()
  const pizzasstate=useSelector(state=>state.getAllPizzasReducer)

  const {pizzas, error, loading}=pizzasstate

  useEffect(() => {
    dispatch(getAllPizzas())
  }, [])
  return (
    <div className='table-responsive-sm'>
        <h2>Pizzas List</h2>
        {loading && (<Loading />)}
        {error && (<Error error='Something Went Wrong'/>)}

        <table className='table table-striped table-bordered table-responsive-sm table-hover'>
            <thead className='thead-dark'>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
        
        <tbody>
            {pizzas &&pizzas.map(pizza=>{
                return <tr key={pizza.name}>
                  <td>{pizza.name}</td>
                  <td>                    
                    Small:{pizza.prices[0]['small']}<br/>
                    Medium:{pizza.prices[0]['medium']}<br/>
                    Large:{pizza.prices[0]['large']}
                  </td>
                  <td>{pizza.category}</td>
                  <td> 
                      <Link to={`/admin/editpizza/${pizza._id}`}>
                          <FaEdit className='m-3'/>
                      </Link> 
                      <FaTrash className='m-3' onClick={()=>{dispatch(deletePizza(pizza._id))}}/>
                  </td>
                </tr>
            })}
        </tbody>
        </table>
        

    </div>
  )
}
