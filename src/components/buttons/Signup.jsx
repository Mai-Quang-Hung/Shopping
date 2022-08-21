import React from 'react'

import './buttons.css'
const Signup = () => {
    return (
        <div>
            {/* Button trigger modal  */}
            <button className="btn btn-warning" type="button"  data-bs-toggle="modal" data-bs-target="#signupModal"
              style={{margin : "2px"}}>
               <i className="fas fa-user-plus"></i> SignUp
            </button>

            {/* Modal  */}
            <div className="modal fade " id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                          
                            <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="login-form">
                                <form>
                                    <h1>Register</h1>
                                    <div className="form-group">
                                        <input type="email" name="email" placeholder="E-mail Address" required/>
                                        <span className="input-icon"><i className="fa fa-envelope"></i></span>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="username" placeholder="User Name" required/>
                                        <span className="input-icon"><i className="fas fa-user-plus"></i></span>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="psw" placeholder="Password" required/>
                                        <span className="input-icon"><i className="fa fa-lock"></i></span>
                                    </div>
                                    <button className="login-btn">SIGN UP</button>
                                  
                                    <div className="seperator"><b>or</b></div>
                                    <p>Register with your social media account</p>

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

export default Signup