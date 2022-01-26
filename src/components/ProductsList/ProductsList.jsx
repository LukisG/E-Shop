import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import ErrorPage from '../ErrorPage/ErrorPage';
import ProductPage from '../ProductPage/ProductPage';
const ProductsList = () => {
  //prekiu krepselis
  const [product, setProduct] = useState([]);

  const addToCart = (item) => {
    const newCart = [...product];

    // console.log(newCart)

    //  console.log(item);


    let productInCart = newCart.find(
      (localval) => item.name === localval.name
    )
    // console.log(item.name)
    // console.log(productInCart);

    if (productInCart === undefined && item.countInStock > 0) {
      productInCart = {
        ...item,
        quantity: 1,

      }
      console.log(productInCart.countInStock > 0)
      newCart.push(productInCart);
      console.log(productInCart)
    } else if (productInCart != undefined && productInCart.countInStock > 0) {

      console.log(productInCart)
      productInCart = {
        ...item,
        quantity: productInCart.quantity++,
        countInStock: productInCart.countInStock -= 1,
      }
      // console.log(item.quantity);
      // newCart.push(productInCart);
      console.log(productInCart)
    } else {
      window.alert("Out Of Stock")

    }


    setProduct(newCart);
  }

  //------------------------------------------------------------------------------

  const updatequantityminus = (item) => {
    // console.log(item)
    const newCart = [...product];
    // console.log(item.quantity === 0)
    if (item.quantity != 1) {
      let productInCart = newCart.find(
        (localval) => item.name === localval.name
      )
      // console.log(productInCart)
      productInCart = {
        ...item,
        quantity: productInCart.quantity -= 1,
        countInStock: productInCart.countInStock += 1,
      }

      // console.log(productInCart)
      setProduct(newCart);
    } else {
      if (window.confirm('Are You sure you want to remove ?')) {
        console.log("true")
        
        let productInCart = newCart.find(
          (localval) => item.name === localval.name)

        // console.log(productInCart)
        handledeleate(productInCart.id)
      } else {
        console.log("false")
      }

    }
  }

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const updatequantityplus = (item) => {
    // console.log(item)
    const newCart = [...product];

    if (item.countInStock !== 0) {
      let productInCart = newCart.find(
        (localval) => item.name === localval.name
      )
      productInCart = {
        ...item,
        quantity: productInCart.quantity += 1,
        countInStock: productInCart.countInStock -= 1,
      }

      // console.log(productInCart)
      setProduct(newCart);
    } else {
      window.alert("Out of Stock")
    }
  }
//deleate-------------------------------------------------------------
  const handledeleate = (id) => {
    // console.log(ProductToRemoveName)
    const newList = product.filter((item) => item.id !== id);
    console.log(newList)
    setProduct(newList);
  }

  const clearcart = () =>{
    setProduct([]);

  }
  return <Router>
    <Navbar bg="dark" variant='dark'>
      <Container>
        <Navbar.Brand>E-Shop</Navbar.Brand>
        <Nav className="me-auto" >
          <Link to="/" style={{ textDecoration: 'none', color: 'white', marginRight: '10px', fontSize: '20px' }}>Main</Link>
          <Link to="/Cart" style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>Cart</Link>
        </Nav>
      </Container>
    </Navbar>
    <Routes>
      <Route path="/" element={<Product addToCart={addToCart} />} />
      <Route path="/cart" element={<Cart product={product} updatequantityminus={updatequantityminus} updatequantityplus={updatequantityplus} handledeleate={handledeleate} clearcart={clearcart}/>} />
      <Route path="/product" element={<ProductPage product={product} />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>;
};

export default ProductsList;
