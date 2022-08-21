import React, { useState } from "react"
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import DATA from "../DATA";
import { useDispatch } from "react-redux";
import { addItem, RemoveItem } from "../redux/action";
import "./productDetail.css"

const ProductDetail = () => {

   

    const [cartBtn, setCartBtn] = useState("Add to Cart")
    const proid = useParams();
    const proDetail = DATA.filter(x => x.id == proid.id)
    const product = proDetail[0];

    const dispatch = useDispatch()

    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(product))

            setCartBtn("Remove from Cart")
        }
        else {
            dispatch(RemoveItem(product))
            setCartBtn("Add to Cart")
        }
    }

    return (
        <>
            <div className="cart_body_product">
                <div className="container my-5 py-3">
                    <div className="row product_detail">

                        <div className="col-md-6 d-flex justify-content-center mx-auto product">
                            <NavLink to="/products" className="return_product"><i className="fas fa-undo"></i></NavLink>

                            <img src={product.img} alt={product.title} width="410px" height="400" />
                        </div>
                        <div className="col-md-6 product_info">
                            <span className="bg animated fadeInDown">{product.category}</span>
                            <h1 className="text-primary">{product.title}</h1>

                            <hr />


                            <p>{product.description}</p>

                            <div className="product_button">

                                <NavLink to="" className="product_price">$ {product.price}</NavLink>
                                <NavLink onClick={() => handleCart(product)} className="product_cart" to=""><i className="fas fa-cart-plus"></i> {cartBtn}</NavLink>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

          

        </>
    )



}


export default ProductDetail
