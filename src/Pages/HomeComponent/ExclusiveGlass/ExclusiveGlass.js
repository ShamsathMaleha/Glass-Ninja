import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Glass from '../Glass/Glass';

const ExclusiveGlass = () => {
    const [glasses, setGlasses] = useState([])



    useEffect(() => {
        fetch('https://immense-peak-94370.herokuapp.com/glasses')
            .then(res => res.json())
            .then(data =>{
                const filter = data.filter(d=>d.category === 'sunglass')
                setGlasses(filter)
            } )
    }, [])

    const glassData = glasses.slice(0,8)
    return (
        <div id="latest">
          <h1>Exclusive Glasses</h1>
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

export default ExclusiveGlass;