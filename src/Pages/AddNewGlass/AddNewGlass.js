import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {  useNavigate } from 'react-router-dom';

const AddNewGlass = () => {



    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = data => {
        
        fetch('https://immense-peak-94370.herokuapp.com/glasses', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Glass Added Successfully');
                    // clearTheCart();
                    reset();
                    navigate('/')
                }
            })
    };
    return (
        <div>

           

        <div>
            <Container>
                <Row className="justify-content-center">
                    <h2 className="text-center mb-4 mt-5">Add New Bike</h2>
                    <Col xs={5} sm={6} lg={4} className="text-center form-class pb-3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input required placeholder="Enter Glass Name" {...register('name', { required: true })}  /> {/* register an input */}
                            {errors.name && <p className="text-white"> Enter name</p>}
                            

                            

                            <input required placeholder="Enter Glass Prize" {...register('price', { required: true })} />
                            {errors.price && <p className="text-white">Please Enter Amount</p>}

                            <input required placeholder="URL" {...register('img',{ pattern: /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/ } )} />
                            {errors.img && <p className="text-white">Please Enter Image Url Link</p>}


                            <input className="btn btn-outline-warning" type="submit" />
                        </form>
                    </Col>
                </Row>
            </Container>

        </div>
    </div>
    );
};

export default AddNewGlass;