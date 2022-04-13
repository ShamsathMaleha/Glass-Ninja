import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
// import Footer from '../../Shared/Footer/Footer';
// import Header from '../../Shared/Header/Header';
// import { Rating } from 'react-simple-star-rating'
import { useForm } from 'react-hook-form';
import './Review.css'
import Slider from 'react-slick';
// import { useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Review = () => {


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    // const {user}= useAuth()
    // const [rating, setRating] = useState(0) // initial rating value
    // const [data,setData] =useState({})
    // const history = useHistory()


    // const handleBlur =(e)=>{
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     const newData ={...data};
    //     newData[field] =value;
    //     setData(newData);
    //     console.log(newData)
    // }


    // const handleRating = (rate) => {
    //     setRating(rate)
    //     // Some logic
    //   }




    //   const {
    //     register,
    //     handleSubmit,
    //     reset,
    //     formState: { errors },
    // } = useForm();

    // const onSubmit = data => {


       
            
    //         console.log(data)
    //         fetch('https://limitless-coast-94755.herokuapp.com/review', {
    //             method: 'POST',
    //             headers: {
    //                 'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(data)
            // })
            //     .then(res => res.json())
            //     .then(result => {
            //         if (result.insertedId) {
            //             alert('Thank you for sending your feedback');
            //             // clearTheCart();
                        
            //             history.push('/')
            //         }
            //     })
    }
    return (
        <>

<div className="container">
            <div className="product-container mt-5">

                {/* title  */}

                <div className="title-part">
                    <h1 className="title">CLIENT</h1>
                    <h3 className="categories">REVIEW</h3>
                </div>

                {/* slick slider starts from here  */}

                <div className="all-product">
                    <Slider {...settings}>

                        <div className="product">
                            {/* <img src={img1} alt="" /> */}
                            <h4>James Bond</h4>
                            <p className="product-desc">The Services of Each Team Member is really aprreciated</p>
                        </div>

                        <div className="product">
                            {/* <img src={img2} alt="" /> */}
                            <h4>Bill Gomes</h4>
                            <p className="product-desc">Instead of focusing on the competition, focus on the customer</p>
                        </div>

                        <div className="product">
                            {/* <img src={img3} alt="" /> */}
                            <h4>Ellite Watson</h4>
                            <p className="product-desc">The Services of Each Team Member is really aprreciated</p>
                        </div>

                        <div className="product">
                            {/* <img src={img4} alt="" /> */}
                            <h4>Margot Robbie</h4>
                            <p className="product-desc">Instead of focusing on the competition, focus on the customer</p>
                        </div>

                        <div className="product">
                            {/* <img src={img1} alt="" /> */}
                            <h4>Sophie Turner</h4>
                            <p className="product-desc">The Services of Each Team Member is really aprreciated</p>
                        </div>

                        <div className="product">
                            {/* <img src={img3} alt="" /> */}
                            <h4>Natasha Malkova</h4>
                            <p className="product-desc">Instead of focusing on the competition, focus on the customer</p>
                        </div>

                        <div className="product">
                            {/* <img src={img2} alt="" /> */}
                            <h4>Cris Hamsworth</h4>
                            <p className="product-desc">The Services of Each Team Member is really aprreciated</p>
                        </div>


                    </Slider>
                </div>

            </div>

            {/* button  */}
            {/* <div>
                <button className="view-more-btn">View More</button>
            </div> */}

        </div>
        
        {/* <div className="container mb-4 review my-5">


        <h2 className=" font-weight-bold text-center my-4">Review</h2>
        
        <div className="row ml-5">
    
          
            <div className="">
            <Container fluid="">
            <form onSubmit={handleSubmit(onSubmit)}>
    
                   
                    <div className="row"> */}
    
                        
                        {/* <div className="col-md-6">
                            <div className=" mb-3"> */}
                                {/* <input onBlur={handleBlur} type="text" value={user.displayName} required name="name" placeholder="Enter your name" className="form-control mb-3"/> */}
                                {/* <input className="form-control" defaultValue={user.displayName} {...register('name', { required: true })} readOnly />  */}

                            {/* </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="mb-3"> */}
                                {/* <input onBlur={handleBlur} type="text" value={user.email} name="email" required placeholder="Enter your email" className="form-control mb-3"/> */}
                                {/* <input className="form-control" defaultValue={user.email} {...register('email', { required: true })} readOnly /> 

                            </div>
                        </div>
                        
    
                    </div>
                    
                    <div className="row">

                        <div className="col-md-12">
                            <div className=" text-start mb-3">
                            <select className=" form-control" {...register("rating")}>
                                <option>Ratings</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                </select> */}

                   {/* <Rating onClick={handleRating} ratingValue={rating}  /> */}

                            {/* </div>
                        </div>
                    </div>
                   
                    <div className="row">
    
                       
                        <div className="col-md-12">
    
                            <div className="md-form"> */}
                                {/* <textarea onBlur={handleBlur} type="text" id="message" name="message" rows="2" placeholder="Write something" className="form-control md-textarea mb-3"></textarea> */}
                                {/* <textarea className="form-control"  {...register('comment', { required: true })}  /> 

                            </div>
    
                        </div>

                        
               
                    </div>
                    <div className="row">
                    <div className="text-center text-md-left">
                <input className="btn btn-outline-warning"  type="submit"/>
                </div>
                    </div> */}
                   
{/*     
                </form>
                </Container>
    
                <div className="status"></div>
            </div>
          
           
        </div>
    
    </div>
    */}
    </>
    );
};

export default Review;