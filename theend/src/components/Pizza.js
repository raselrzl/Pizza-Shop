import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import {useDispatch} from 'react-redux'
import { addToCart } from '../actions/cartActions';


export default function Pizza({ pizza }) {
      const [quantity, setQuantity] = useState(1)
      const [varient, setVarient] = useState('Meny')

      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const dispatch=useDispatch()
      function addtocart(){
            dispatch(addToCart(pizza, quantity, varient))
      }
      return (

            <div data-aos='zoom-in'>
                  <div onClick={handleShow}>
                        <h5 className='pizza-name'>{pizza.name}</h5>
                        <img src={pizza.image} alt={pizza.name} className="pizza-img" />
                  </div>


                  <div className='flex-container'>
                        <div className='w-100 m-1'>
                              <p className='varient-quantity-title mt-1'>Varients</p>
                              <select className="form-control form-control-sm "  value={varient} onChange={(e) => { setVarient(e.target.value) }}>
                                    {pizza.varients.map(varient => {
                                          return <option value={varient} key={varient.varient}>{varient} </option>
                                    })}
                              </select>
                        </div>
                        <div className='w-100 m-1'>
                              <p className='varient-quantity-title mt-1'>Quantity</p>
                              <select className="form-control form-control-sm" value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                                    {[1,2,3,4,5,6,7,8,9,10].map((number) => {
                                          return <option value={number} key={number.key}>{number} </option>
                                          
                                    })}
                              </select>
                        </div>
                  </div>
                  <div>
                        <div className='w-100'>
                              <h1 className='mt-1 pizza-price'>{pizza.prices[0][varient] * quantity} SEK</h1>
                        </div>
                        <div className='w-100 m-1'>
                              <button className='btn btn-sm add-to-cart-button' onClick={addtocart}> Add To Cart</button>
                        </div>
                  </div>

                  <Modal show={show} onHide={handleClose} className='modal-dialog-centered'>
                        <Modal.Header closeButton>
                              <Modal.Title>{pizza.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                              <img src={pizza.image} alt={pizza.name} className="img-fluid pizza-img m-1" id='modal-img'/>
                              <p>{pizza.description}</p>
                        </Modal.Body>
                        <Modal.Footer>
                              <button variant="secondary" onClick={handleClose} className='btn'>
                                    Close
                              </button>
                        </Modal.Footer>
                  </Modal>
            </div>
      )
}
