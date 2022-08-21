import React from 'react'
import './cartBtn.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from "react-redux";

const CartBtn = () => {

    const state = useSelector((state) => state.addItem)
   
    return (
        <div className="header__cart">
            <div className="header__cart-wrap">
            <NavLink to = "/cartP">
                <i className="header__cart-icon fas fa-cart-plus"></i>   
                <span className="header__cart--notice">{state.length}</span>
                </NavLink>

                {/* <div className="header__cart-list ">

                    <span className="header__cart-no-cart-msg">
                        Chưa có sản phẩm
                    </span>



                    <button className="header__cart-view-cart btn btn--primary">Xem giỏ hàng</button>



                </div> */}
            </div>
        </div>
    )
}

export default CartBtn