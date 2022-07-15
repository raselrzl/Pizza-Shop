import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deliverOrder, getAllOrders } from '../actions/orderAction'
import Error from '../components/Error'
import Loading from '../components/Loading'

export default function Orederslist() {
  const dispatch=useDispatch()

  const getordersstate=useSelector(state=>state.getAllOrdersReducer)

  const {orders, error, loading}=getordersstate

  useEffect(()=>{
    dispatch(getAllOrders())
  },[])
  return (
    <div className='table-responsive-sm'>
        {loading && (<Loading />)}
        {error && (<Error error='Something Went Wrong'/>)}
        <table className='table table-striped table-bordered table-hover'>
          <thead className='thead-dark'>
              <tr>
                <th>Order ID</th>
                <th>Email</th>
                <th>User ID</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
          </thead>
          <tbody>
            {orders && orders.map(order=>{
              return <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.email}</td>
                  <td>{order.userid}</td>
                  <td>{order.orderAmount}</td>
                  <td>{order.createdAt.substring(0,10)}</td>
                  <td>
                    {order.isDelivered?(
                           <h1>Delivered</h1>
                      ):(
                           <button className='btn' onClick={()=>{dispatch(deliverOrder(order._id))}}>Deliver</button>
                      )}
                  </td>
              </tr>
            })}
          </tbody>
        </table>
    </div>
  )
}
