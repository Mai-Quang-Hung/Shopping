import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
import Login from './buttons/Login'
import Signup from './buttons/Signup'
import './header.css'


const Header = () => {
    return (
        <>
        <header className='p-3 bg-dark text-white'>
            <div className="container">

                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <NavLink to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">

                    </NavLink>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><NavLink to="/" className="nav-link px-2 text-secondary"><i className="fas fa-home"></i> Home</NavLink></li>
                        <li><NavLink to="/products" className="nav-link px-2 text-white">Product</NavLink></li>
                        <li><NavLink to="about" className="nav-link px-2 text-white">About</NavLink></li>
                        <li><NavLink to="/contact" className="nav-link px-2 text-white">Contact</NavLink></li>
                     
                    </ul>
                    <NavLink className="shop navbar-brand nav col-12 col-lg-auto me-lg-auto mb-5 justify-content-center mb-md-0" to="/">Tempest</NavLink>
                  

                    <div className="text-end header__button">

                      <Login/>  <Signup/>
                     
                    </div>

                    <CartBtn/>
                </div>
            </div>
            </header>
          
       

        </>
    )
}

export default Header