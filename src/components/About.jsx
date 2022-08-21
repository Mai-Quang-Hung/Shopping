import React from 'react'


const About = () => {
    return (
        <div>
            <div className='container py-5 my-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1 className='text-primary fw-bold mb-4'>About Us</h1>
                        <p className='lead'>
                            Jura Tempest Wholesale Market was established in October 1996 and is one of
                            the most advanced clothing wholesale market in Guangzhou providing the most
                            comprehensive services. We also have one of the most extensive supply distribution
                            center which brings together thousands of manufacturers from all around China with
                            the latest style and the most competitive price.
                            GuangZhou Liuhua fashion wholesale market is located at the south tower of Liuhua Hotel,
                            the extremely convenient logistic location adjacents to Guangzhou Railway Station,
                            Provincial Bus Terminal and right next to main highways, railways and air cargo shipments stations.
                            After 20 years of operation, the business area of Liuhua fashion wholesale market has reached 25000m2 with more than 2,000 manufacturers and brands,
                            the market has become an important hub for clothing wholesale worldwide and one of the country's major clothing distribution centers.
                        </p>
 
                    </div>

                    <div className='col-md-6'>
                    <img src="assets/images/home/about.jpg" className=" w-100 d-block " alt="my team" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About