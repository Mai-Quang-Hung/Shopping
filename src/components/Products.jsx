import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./product.css"
import DATA from "../DATA"

const Products = () => {
    const [filter, setFilter] = useState(DATA);
    // CARD PRODUCTS
    const filterProduct = (cat) => {
        const updatedList = DATA.filter((x)=>x.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
          <>
            <div className="buttons d-flex justify-content-center pb-5">
              <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(DATA)}>All</button>
              <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
              <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>
                Women's Clothing
              </button>
              <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
              <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronic</button>
            </div>


          </>
    );
  };
    return (
        <div>
            <div className='container my-5 container-product'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='display-6 fw-bolder text-center'> PRODUCTS</h1>
                        <hr />
                        <ShowProducts />
                    </div>

                </div>
            </div>

            <div className='container'>
                <div className='row justify-content-around'>
                {filter.map((item) => {
        return (
            <div className="card1 " key={item.id}>

                <div className="imgBox">
                    <img src={item.img} alt={item.title} className="mouse" />
                </div>

                <div className="contentBox">
                    <h3>{item.title}</h3>
                    <h2 className="price">${item.price} </h2>


                    <NavLink to={`/products/${item.id}`} className="buy">Buy Now</NavLink>

                </div>

            </div>
        )
    })}
                </div>

            </div>
        </div>
    )
}

export default Products

