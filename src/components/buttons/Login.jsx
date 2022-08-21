import React from 'react'
import { NavLink } from 'react-router-dom'
import './buttons.css'
const Login = () => {
    return (
        <div>
            {/* Button trigger modal  */}
          
            <button  className="btn btn-outline-light me-2" type="button" data-bs-toggle="modal" data-bs-target="#loginModal" 
            style={{margin : "2px"}}>
           <i className="fas fa-sign-in-alt"></i> Login
            </button>

            {/* Modal  */}
            <div className="modal fade modal_class" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="login-form">
                                <form>
                                    <h1>Login</h1>
                                    <div className="form-group">
                                        <input type="email" name="email" placeholder="E-mail Address" required/>
                                        <span className="input-icon"><i className="fa fa-envelope"></i></span>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="psw" placeholder="Password" required/>
                                        <span className="input-icon"><i className="fa fa-lock"></i></span>
                                    </div>
                                    <button className="login-btn">SIGN IN</button>
                                    <NavLink className="reset-psw" to="/">Forgot your password?</NavLink>
                                    <div className="seperator"><b>or</b></div>
                                    <p>Sign in with your social media account</p>

                                    <div className="social-icon">
                                        <button type="button" className='social-icon-goo'><i className="fab fa-google " ></i></button>
                                        <button type="button" className='social-icon-face'><i className="fab fa-facebook-f "></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login