import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {FaMinus, FaPlus, FaTrash} from 'react-icons/fa'
import { addToCart, deleteFromCart } from '../actions/cartActions'
import Checkout from '../components/Checkout'


export default function CartPage() {
  const cartstate=useSelector(state=>state.cartReducer)
  const cartItems=cartstate.cartItems
  const dispatch=useDispatch()
  const subtotal=cartItems.reduce((x, item)=>x+item.price, 0)
  return (
      <div data-aos='fade-down'>
    <div className='row justify-content-center'>
        <div className='col-md-6 cart-update'>
            <h3 className='cart-title'>Cart Items</h3>
            {cartItems.map(item=>{
                return (<div className='flex-container' key={item.name}>
                            <div className="text-left cart-item-box w-100">
                                <h1>{item.name} ( {item.varient} )</h1>
                                <h1>Price:{item.quantity}*{item.prices[0][item.varient]}={item.price}</h1>
                                <h4 className='quantity'>Quantity:</h4>
                                <FaPlus className='quantity m-3' id='plus' onClick={()=>{dispatch(addToCart(item,item.quantity+1, item.varient))}}/>
                                <h5 className='quantity m-2'>{item.quantity}</h5>
                                <FaMinus className='quantity m-2' id='minus' onClick={()=>{dispatch(addToCart(item,item.quantity-1, item.varient))}}/>
                                <hr/>
                                
                            </div>
                            <div className='w-100'>
                                <img src={item.image} className="cart-image" alt={item.name}/>
                            </div>
                            <div className='w-100'>
                                <FaTrash id="delete-icon" onClick={()=>{dispatch(deleteFromCart(item))}}/>
                            </div>
                        </div>
            
            )})}
            
        </div>
        <div className='col-md-4 total'>
            <h4 className='total'>Total Amount: {subtotal} SEK</h4>
            <Checkout subtotal={subtotal}/>
        </div>
    </div>
    </div>

  )
}
