import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Footer from '../../Pages/Shared/Footer/Footer';
import Header from '../../Pages/Shared/Header/Header';
import Glass from '../Glass/Glass';

const Glasses = () => {
    const [glasses, setGlasses] =useState([])

    useEffect(()=>{
        fetch('https://immense-peak-94370.herokuapp.com/glasses')
        .then(res => res.json())
        .then(data => setGlasses(data))
    },[])
    return (
        <div>


{
   
                !glasses.length &&
                <div className="text-center mt-5">
                    <Spinner animation="grow" />
                </div>
            }
            {glasses.length &&
                <Row xs={1} md={3} className="g-2 my-3">
                    {glasses.map((glass, idx) => (
                        <Glass

                            glass={glass}
                        />
                    ))}
                </Row>}
                
        </div>
    );
};

export default Glasses;