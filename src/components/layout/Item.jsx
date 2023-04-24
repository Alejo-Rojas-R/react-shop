import React from 'react'
import { RatingStars } from './RatingStars'
import { NavLink } from 'react-router-dom'
import { Card, Button, Row, Col } from "react-bootstrap";

export const Item = ({ item }) => {

  return (
    <Card>
      <Card.Img variant="top" src={item.thumbnail} alt="Product Image" />
      <Card.Body>
        <Card.Title><NavLink to={`/product/${item.id}`}>{item.title}</NavLink></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Product Subtitle
        </Card.Subtitle>
        <Row>
          <Col>
            <Card.Text><i className="bi bi-currency-dollar me-1"></i>{item.price}</Card.Text>
          </Col>
          <Col>
            <div className="d-flex align-items-center justify-content-end">
              <RatingStars rating={item.rating} />
            </div>
          </Col>
        </Row>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Button variant="primary" className="me-2">
          Add to Cart <i className="bi bi-cart-plus"></i>
        </Button>
        <Button variant="secondary">
          Save to Profile <i className="bi bi-heart"></i>
        </Button>
      </Card.Body>
    </Card>
  )
}
