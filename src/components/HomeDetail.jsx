import React from "react";
import { NavLink } from 'react-router-dom'
import "./homeDetail.css"
import DATA from "../DATA";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const HomeDetail = () => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black",borderRadius: "50%" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black",borderRadius: "50%" }}
            onClick={onClick}
          />
        );
      }
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,      
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
            {
                breakpoint: 1198,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    rows: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1
                }
            }
        ]
    };
    return (
        <>
        <div className="container">
                 {/* Detail 1 */}
            <div className="home_container mb-5">
                <div className="row ">

                    <div className="col-sm-3 home_size">
                        <div className="card home_card">
                            <div className="card-body">
                                <i className="fas fa-shopping-bag icon"></i>
                                <h5 className="card-title">Free shipt</h5>
                                <p className="card-text">Free shipping on orders over $1000.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card home_card">
                            <div className="card-body">
                                <i className="far fa-credit-card icon"></i>
                                <h5 className="card-title">Payment support</h5>
                                <p className="card-text">You can pay in advance or you can pay on delivery</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card home_card">
                            <div className="card-body">
                                <i className="fas fa-gem icon"></i>
                                <h5 className="card-title">Great deals</h5>
                                <p className="card-text">You will receive many great incentives when you become NavLink "VIP".</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card home_card">
                            <div className="card-body">
                                <i className="fas fa-headset icon"></i>
                                <h5 className="card-title">Dedicated support</h5>
                                <p className="card-text">The store will support free exchange if there is NavLink manufacturer defect.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detail 2 */}
            <div className=" mb-5">
            <div className="row featurette home_list mb-5">
                <div className="col-md-7">
                    <h2 className="featurette-heading">Pioneering fashion forecast. <span className="text-muted">It'll blow your mind.</span></h2>
                    <p className="lead">Boasts quality products and excellent customer service. Come to us, fashion products that make you shine every day.</p>
                </div>
                <div className="col-md-5">
                    <img src="./assets/images/home/mau1.jpg" alt="" width="500px" height="500px" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"/>

                </div>
            </div>

            <hr className="featurette-divider" />
            
            <div className="row featurette home_list mb-5">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">Style and style</span></h2>
                    <p className="lead">Since its launch, Tempest fashion has targeted at high-income customers who are often interested in their outfits. Tempest mainly targets male customers who have to wear NavLink shirt to the office, combined with NavLink tie, NavLink vest to follow NavLink formal fashion..</p>
                </div>
                <div className="col-md-5 order-md-1">
                    <img src="./assets/images/home/mau2.jpg" alt="" width="500px" height="500px" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />


                </div>
            </div>
            </div>
            <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'> PREVIEW</h1>
                        <hr />
                      
                    </div>
            <Slider {...settings} className="mb-5">
        

            {DATA.map((item) => (
                <>
                <div className="card slick_img" key={item.id}>
                <NavLink to ="/products">
                       <img src={item.img} alt={item.title} className="img-slick" />
                       </NavLink>
                       <span> ${item.price}</span>
                </div>
                <div>   </div>
                </>
            ))}

            </Slider>
       
            <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'> MANAGER</h1>
                        <hr />
                      
                    </div>

            <div className="row mb-5 home_about" >
                
            <div className="col-lg-4">
                <img src="./assets/images/home/diablo.jpg" alt="" className="bd-placeholder-img rounded-circle" width="140px" height="140px"/>

                <h3 className="text-success">Noir Diablo </h3>
                    <h5>CHRO.</h5>
                    <p><NavLink className="btn btn-secondary" to = "/contact">Contact Me »</NavLink></p>
                </div>
                <div className="col-lg-4">
                  <img src="./assets/images/home/rimuru.jpg" alt="" className="bd-placeholder-img rounded-circle" width="140px" height="140px"/>
                    <h3 className="text-success"> Rimuru Tempest</h3>
                    <h5>President.</h5>
                    <p><NavLink className="btn btn-secondary" to = "/contact">Contact Me »</NavLink></p>
                </div>
              
                <div className="col-lg-4">
                <img src="./assets/images/home/shuna.jpg" alt="" className="bd-placeholder-img rounded-circle" width="140px" height="140px"/>
                <h3 className="text-success">Shuna </h3>
                    <h5>Product Manager.</h5>
                    <p><NavLink className="btn btn-secondary" to = "/contact">Contact Me »</NavLink></p>
                </div>
            </div>
        </div>

       
        </>
    )
}

export default HomeDetail;