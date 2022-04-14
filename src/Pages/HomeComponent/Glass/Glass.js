import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Glass = (props) => {


    const navigate = useNavigate()
  const handleBuy =()=>{
    navigate(`/purchase/${_id}`)
  }
    const { name, img, price, _id} = props.glass

    return (
        <div className="d-flex justify-content-center">
            
                  <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" style={{height: '190px',objectFit:'cover'}} src={img}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
        {price} USD
          </Card.Text>
          <button onClick={handleBuy} className="btn btn-info">Buy Now</button>
        </Card.Body>
      </Card>
        </div>
    );
};

export default Glass;