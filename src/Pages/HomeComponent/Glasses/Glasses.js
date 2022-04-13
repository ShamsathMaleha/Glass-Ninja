import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Glass from '../../../GlassComponents/Glass/Glass';

const Glasses = () => {

    const [glasses, setGlasses] = useState([])



    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setGlasses(data))
    }, [])

    const glassData = glasses.slice(0,8)
    return (
        <div id="latest">
          <h1>Our Latest Bike</h1>
            {
                !glasses.length ?  
                <div className="text-center mt-5">
                    <Spinner animation="grow" />
                </div>
           :

           
                <Row xs={1} md={2} lg={4} className="g-4 my-5 w-100">
                    {glassData.map((glass, idx) => (
                        <Glass

                            glass={glass}
                        />
                    ))}
                </Row>}
                </div>
    );
};

export default Glasses;