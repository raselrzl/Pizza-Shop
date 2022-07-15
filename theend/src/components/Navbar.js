import React from 'react'
import { Navbar, Container, NavDropdown } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {logoutUser } from '../actions/userActions'

export default function Navbarr() {
    const cartstate = useSelector(state => state.cartReducer)
    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch=useDispatch()

    return (
        <div className='shadow-none p-3 mb-5 bg-light rounded nav-bar'>
            <Navbar>
                <Container>
                    <Navbar.Brand className='Nabtitle ' href="/">Pizzaria</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className='nav-item'>
                            <a href='/cart'><h6>Cart {cartstate.cartItems.length}</h6></a>
                        </Navbar.Text>

                        {currentUser ? (<NavDropdown
                            id="nav-dropdown-dark-example"
                            title={currentUser.name}
                            menuVariant="dark"
                            className='dropDown'
                        >
                            <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="" onClick={()=>{dispatch(logoutUser())}}>Log Out</NavDropdown.Item>
                        </NavDropdown>) :
                            (<Navbar.Text className='nav-item'>
                                <a href='/login'><h6>Login</h6></a>
                            </Navbar.Text>)

                        }


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
