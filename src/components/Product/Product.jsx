import React from 'react';
import { Card, Button } from 'react-bootstrap';
import data from "../Data/Data"
import { Link } from 'react-router-dom';
const Product = ({ addToCart }) => {

    return (
        <div>
            {
                data.map((item, index) => (
                    // console.log(item.name)
                    <Card style={{ width: '18rem' }} key={index}>
                        <Card.Img variant="top" src={item.imgUrl} />
                        <Card.Body>
                            <Link to='/product' style={{ textDecoration: 'none', color: 'black' }} state={{ from: item }}><Card.Title>{item.name}</Card.Title></Link>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <Card.Text>
                                {item.price} € <Button variant="primary" onClick={() => addToCart(item)}>Add To Cart</Button>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                )
                )
            }

        </div>
    );
};

export default Product;
