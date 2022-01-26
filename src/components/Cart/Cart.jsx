import React, { useState, useReducer } from 'react';
import { Table } from 'react-bootstrap';
const Cart = (props) => {
  console.log(props.product);
  const getSum = () => {
    return props.product.reduce((sum, { price, quantity }) => sum + price * quantity, 0).toFixed(2)
  }


  if (props.product[0] != null) {
    return (

      <div>Cart
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>img</th>
              <th>quantity</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>

            {props.product.map(item => {

              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td><img src={item.imgUrl} className='imgas' /></td>
                  <td><button id={item.id} onClick={() => props.updatequantityminus(item)}>-</button>
                  {item.quantity}
                  <button id={item.id} onClick={() => props.updatequantityplus(item)}>+</button></td>
                  <td>{item.price} eur</td>
                  <td><button onClick={() => props.handledeleate(item.id)}>Deleate</button></td>
                </tr>
              )


            })}
            <button onClick={props.clearcart}>Clear Cart</button><br /><br />
            <button>Pay</button> <span>sum: {getSum()}</span>
          </tbody>
        </Table>

      </div>

    );
  } else {
    return (
      <div>Empty</div>
    )
  }

};

export default Cart;
