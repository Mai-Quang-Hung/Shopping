import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-12 text-center py-4 my-4'>
                        <h1 className='text-primary fw-bold mb-4 '>Have some a question <i className="fa fa-question" aria-hidden="true"></i></h1>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-5 d-flex justify-content-center' >
                        <img src="assets/images/home/contactus.jpg" alt="contact" height="350px" width="400px" />
                    </div>
                    <div className='col-md-6'>
                        <form className='form-action'>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControl" className="form-label">Full name</label>
                                <input type="text" className="form-control" id="exampleFormControl" required placeholder="Full Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" required placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                <textarea className="form-control" required id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                            <button type='submit' className='btn btn-outline-success' style={{float:"right"}}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact