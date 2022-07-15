import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../actions/orderAction'
import Error from '../components/Error'
import Loading from '../components/Loading'
export default function Orderpage() {
  const dispatch=useDispatch()
  const orderstate=useSelector(state=>state.getUserOrdersReducer)
  const {orders, error, loading}=orderstate
  useEffect(()=>{
    dispatch(getUserOrders())
  },[])
  return (
    <div>
        <h3> My Orders List</h3>
        <hr/>
        <div className='row justify-content-center'>
            {loading && (<Loading />)}
            {error && (<Error error='Something Went Wrong' />)}
            {orders && orders.map(order=>{
              return <div className='col-md-8'>
                  <div className='flex-container'>
                      <div className='text-left w-100 m-1'>
                        <h1>Items</h1>
                          {order.orderItems.map(item=>{
                            return <div key={item.name} > 
                              <h1> {item.name} [{item.varient}]*{item.quantity}={item.price} </h1>

                            </div>
                          })}
                      </div>
                      <div className='text-left w-100 m-1'>
                            <h1>Address</h1>
                            <h1>Street:{order.shippingAddress.street}</h1>
                            <h1>City:{order.shippingAddress.city}</h1>
                            <h1>Country:{order.shippingAddress.country}</h1>
                            <h1>Zipcode:{order.shippingAddress.zipcode}</h1>
                      </div>
                      <div className='text-left w-100 m-1'>
                          <h1>Order Info</h1>
                          <h1>Order Amount: {order.orderAmount}</h1>
                          <h1>Date: {order.createdAt.substring(0,10)}</h1>
                          <h1>Transaction ID:{order.transactionId}</h1>
                          <h1>Order ID:{order._id}</h1>
                      </div>
                  </div>
              </div>
            })}
        </div>
    </div>
  )
}
