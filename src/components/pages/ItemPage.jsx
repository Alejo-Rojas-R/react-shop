import React from 'react'
import { Container, Row, Col, Image, Button, Carousel, Spinner } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Header } from '../layout/Header';
import { RatingStars } from '../layout/RatingStars';

export const ItemPage = () => {

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

  return (
    <>
      <Header />
      <Container className="my-5">
        <Row>
          <Col md={6}>
            <Carousel>
              {data.images.map((item, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={item} alt={`slide-${index}`} />
                </Carousel.Item>
              ))}
              <Image src={data.images} fluid />
            </Carousel>
          </Col>
          <Col md={6}>
            <h1>{data.title}</h1>
            <hr />
            <span className="opacity-50"><s>${data.price}</s></span>
            <div className="d-flex align-items-center">
              <h3 className="me-1">${data.price}</h3>
              <h6 className="text-danger">{data.discountPercentage}% OFF</h6>
            </div>
            <div className="d-flex align-items-center">
              <RatingStars rating={data.rating} />
            </div>
            <p className="opacity-75">{data.stock} in stock</p>
            <hr />
            <p>{data.description}</p>
            <Button variant="primary" className="me-2">
              Add to Cart <i className="bi bi-cart-plus"></i>
            </Button>
            <Button variant="secondary">
              Save to Profile <i className="bi bi-heart"></i>
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
