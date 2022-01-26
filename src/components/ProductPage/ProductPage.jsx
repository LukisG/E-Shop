import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
const ProductPage = () => {
    const location = useLocation();
    // console.log(location);
    const { from } = location.state;
    console.log(from);
    return (
        <Card style={{ width: '18rem' }} key={from.id}>
            <Card.Img variant="top" src={from.imgUrl} />
            <Card.Body>
                <Card.Title>{from.name}</Card.Title>
                <Card.Text>
                    {from.description}
                </Card.Text>
                <Card.Text>
                    {from.price} € <Link to="/" className="btn btn-primary">Back</Link>
                </Card.Text>

            </Card.Body>
        </Card>
    )
};

export default ProductPage;
