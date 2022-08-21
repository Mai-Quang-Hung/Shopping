import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addItem } from "../redux/action/index"
import { delItem } from "../redux/action/index"
import { RemoveItem } from "../redux/action/index"



const Cart = () => {
    const state = useSelector((state) => state.addItem)
    const dispatch = useDispatch()

    // del item 
    const handleClose = (item) => {
        dispatch(RemoveItem(item))
    }
    const handleAdd = (item) => {
        
        dispatch(addItem(item))
    }
    const handleDel = (item) => {
        dispatch(delItem(item))
    }

    // render cart
    const CartItems = (cartItem) => {
        return (

            <div className=" my-5 bg-light rounded-3 cart_width"  key={cartItem.id}>
                <div className="container py-4">
                    <button className="btn-close float-end" aria-label="Close" onClick={() => handleClose(cartItem)}></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4 cart_img">
                            <img src={cartItem.img} alt={cartItem.title}  height="auto" />
                        </div>
                        <div className="col-md-7">
                            <span className="bg animated fadeInDown">{cartItem.category}</span>
                            <h4>{cartItem.title}</h4>
                            <p className="lead fw-bold"> ${cartItem.price} <i className="fas fa-caret-right"></i><span className="text-danger"> ${cartItem.qty * cartItem.price} </span></p>
                                <hr/>
                            <button className="btn btn-outline-dark cart-icon "  onClick={() => handleDel(cartItem)} ><i className="fas fa-minus"></i></button>
                                <span className="text-primary" style={{marginRight:"9px"}}>{cartItem.qty}</span>  
                            <button className="btn btn-outline-dark cart-icon"  onClick={() => handleAdd(cartItem)}><i className="fas fa-plus"></i></button>
                        </div>

             
                    </div>
                </div>
            </div>


        )
    }
    const emptyCart = () => {
        return (
            <div className=" cart_empty" >
              
                <img src ="http://bizweb.dktcdn.net/100/319/764/themes/668785/assets/empty-cart.png?1529997226343" alt="" />
            </div>
        )
    }

    const button = () => {
        return (
            <div className="container">
                <div className="row">
                <NavLink to ="/checkout" className="btn btn-outline-dark w-25 mb-5 mx-auto">Checkout</NavLink>
                </div>
            </div>
        )
    }
    return (

        <div className="cart_product_render">
      
            <div className="cart_notexist">
                {state.length === 0 && emptyCart()}
                {state.length !== 0 && state.map(CartItems)}
                {state.length !== 0 && button()}

            </div>
        </div>
    )
}

export default Cart;