import React, { useContext } from 'react'
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Header } from '../layout/Header';
import { RatingStars } from '../layout/RatingStars';
import { ImagesCarousel } from '../layout/ImagesCarousel';
import { Footer } from '../layout/Footer';
import { CartCountContext } from '../../routes/Routing';

export const ItemPage = () => {

  const { setCartCount } = useContext(CartCountContext);

  const { id } = useParams();

  const { data, loading } = useFetch(`https://dummyjson.com/products/${id}`);

  // Loading spinner
  if (loading === true) {
    return (
      <Container className="d-flex align-items-center justify-content-center vh-100">
        <Spinner animation="border" />
      </Container>
    );
  }

  const formatUSD = Intl.NumberFormat("en-US", {style: "currency",currency: "USD",});
  const appliedDiscount = data.price - (data.price * (data.discountPercentage / 100));  

  const handleAddToCart = (e) => {
    
    e.preventDefault();

    const cart = JSON.parse(localStorage.getItem('cart')) ?? [];
    const items = JSON.stringify([...cart,
    {
      'id': `item_${data.id}`,
      'title': data.title,
      'price': data.price - (data.price * (data.discountPercentage / 100)),
      'image': data.thumbnail,
    }
    ]);

    localStorage.setItem('cart', items);

    const countCartItems = JSON.parse(localStorage.getItem('cart')).length;

    setCartCount(countCartItems);
  }

  return (
    <>
      <Header />
      <Container className="my-5 vh-100">
        <Row>
          <Col md={6}>
            <ImagesCarousel images={data.images} />
          </Col>
          <Col md={6} >
            <Container className='rounded bg-white p-4'>
              <h1>{data.title}</h1>
              <hr />
              <span className="opacity-50"><s>{formatUSD.format(data.price)}</s></span>
              <div className="d-flex align-items-center">
                <h3 className="me-2" data-price={appliedDiscount}>{formatUSD.format(appliedDiscount)}</h3>
                <h6 className="text-danger">{data.discountPercentage}% OFF</h6>
              </div>
              <div className="d-flex align-items-center">
                <RatingStars rating={data.rating} />
              </div>
              <p className="opacity-75">{data.stock} in stock</p>
              <hr />
              <p>{data.description}</p>
              <Button variant="primary" className="me-2" onClick={handleAddToCart}>
                Add to Cart <i className="bi bi-cart-plus"></i>
              </Button>
            </Container>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}
