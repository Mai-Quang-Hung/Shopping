import React from 'react'
import { NavLink } from 'react-router-dom'
import "./home.css"
import HomeDetail from './HomeDetail'

const Home = () => {
    return (
        <div >

            {/* slide */}
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>


                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active carousel-item-start">
                        <img className="bd-placeholder-img" width="100%" height="100%" src="./assets/images/home/slide1.jpg" alt='' aria-hidden="true" />

                        <div className="container">
                            <div className="carousel-caption text-start ">
                                <h1>Example headline.</h1>
                                <p>Some representative placeholder content for the first slide of the carousel.</p>
                                <NavLink className="btn btn-lg btn-primary" to="products">Sign up today</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item carousel-item-next carousel-item-start">
                        <img className="bd-placeholder-img" width="100%" height="100%" src="./assets/images/home/slide2.gif" alt='' aria-hidden="true" />

                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Another example headline.</h1>
                                <p>Some representative placeholder content for the second slide of the carousel.</p>
                                <NavLink className="btn btn-lg btn-primary" to="products">Learn more</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="bd-placeholder-img" width="100%" height="100%" src="./assets/images/home/slide4.webp" alt='' aria-hidden="true" />

                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>One more for good measure.</h1>
                                <p>Some representative placeholder content for the third slide of this carousel.</p>
                                <NavLink className="btn btn-lg btn-primary" to="products">Browse galme</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <HomeDetail />
           
        </div>
    )
}

export default Home