import React from 'react';
import { Card } from 'react-bootstrap';

const Glass = (props) => {
    const {name,img,price}= props.glass
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img}/>
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
   {price}
    </Card.Text>
    <button variant="primary">Go somewhere</button>
  </Card.Body>
</Card>
        </div>
    );
};

export default Glass;