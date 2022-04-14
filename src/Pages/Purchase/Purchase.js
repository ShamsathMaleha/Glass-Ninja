import React, { useEffect, useState } from 'react';
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Purchase.css'

const Purchase = () => {
    
    
    const { user } = useAuth()
    const { id } = useParams()
    const [car, setCar] = useState({})
    const navigate = useNavigate()
    // const [status, set]
    useEffect(() => {
        // addToDb(aId)
        // const url = `http://localhost/5000/glasses/${id}`
        const url = `https://immense-peak-94370.herokuapp.com/glasses/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCar(data)
                console.log(data)
            })
    }, [])
    
   

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        
        data.status = 'pending'
        data.purchase = car;
        
        console.log(data)
        fetch('https://immense-peak-94370.herokuapp.com/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    // clearTheCart();
                    reset();
                    navigate('/dashboard/myOrder')
                }
            })
       
    }
    return (


        <div>
            
            <Container >
                <Row>
                    <Col className="my-5">
                    <Card>
                    <Card.Img variant="top" src={car.img} height="300" />
                    <Card.Body>
                        <Card.Title>{car.name}</Card.Title>
                        <Card.Text>
                            <Container>
                                <Row>
                                    <Col>
                                    {car.price} USD
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Text>

                    </Card.Body>
                </Card>
                    </Col>

  
                    <Col  className="my-5">
                           <div className="form-class mx-auto">
                           <form onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue={user.displayName} {...register('name', { required: true })} readOnly /> 
                                {errors.name && <p className="text-white">Please Enter your name</p>}
                                <input defaultValue={user.email} {...register('email', { required: true })} readOnly />
                                {errors.email && <p className="text-white">Please Enter your email</p>}

                                <input placeholder="Phone" {...register('phone', { required: true })} />
                                {errors.phone && <p className="text-white">Please Enter your phone</p>}

                                <input placeholder="Address" {...register('address', { required: true })} />
                              
                             
                                

                                <input className="btn btn-outline-warning"  type="submit"/>
                            </form>
                           </div>
                        </Col>
                   
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;