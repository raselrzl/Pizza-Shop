import React, {useState} from 'react'
import { useDispatch} from 'react-redux'
import { filterPizzas } from '../actions/pizzaActions'


export default function Filter() {
    const dispatch=useDispatch()
    const [search, setSearch]=useState('')
    const [category, setCategory]=useState('all')
  return (
    <div className='container'>
        <div className='row justify-content-center shadow-lg p-3 mb-5 bg-white rounded'>
            <div className='col-md-3'>
                <input type='text' className='form-control' placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)}></input>
            </div>
            <div className='col-md-3 mt-2'>
                <select className='form-control col-md-2' value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <option value='all'>All</option>
                    <option value='veg'>Veg</option>
                    <option value='nonveg'>Non-Veg</option>
                </select>
            </div>
            <div className='col-md-3 mt-2'>
                <button className='btn' onClick={()=>{dispatch(filterPizzas(search, category))}}>FILTER</button>
            </div>
        </div>
    </div>
  )
}
