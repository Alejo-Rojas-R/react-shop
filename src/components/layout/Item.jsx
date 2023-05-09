import React, { useContext, useRef } from 'react'
import { RatingStars } from './RatingStars'
import { NavLink } from 'react-router-dom'
import { Card, Button, Row, Col, Badge } from 'react-bootstrap';
import { CartCountContext } from '../../routes/Routing';

export const Item = ({ item }) => {
  const itemId = useRef('');
  const itemTitle = useRef('');
  const itemPrice = useRef('');
  const itemThumb = useRef('');
  const { setCartCount } = useContext(CartCountContext);

  const handleCart = (e) => {
    e.preventDefault();

    const cart = JSON.parse(localStorage.getItem('cart')) ?? [];
    const items = JSON.stringify([...cart,
    {
      'id': itemId.current.id,
      'title': itemTitle.current.innerText,
      'price': itemPrice.current.getAttribute('data-price'),
      'image': itemThumb.current.src,
    }
    ]);

    localStorage.setItem('cart', items);

    const countCartItems = JSON.parse(localStorage.getItem('cart')).length;

    setCartCount(countCartItems);
  }

  const formatUSD = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const appliedDiscount = item.price - (item.price * (item.discountPercentage / 100));

  return (
    <Card className='p-2 border-0'>
      <Card className='item__item' id={`item_${item.id}`} ref={itemId}>
        <NavLink to={`/product/${item.id}`} className='text-decoration-none link-dark'>
          <Card.Header className='p-0 position-relative'>
            <Card.Text as='h4' className='m-0 ms-3 mt-3 item__price position-absolute'><Badge bg='success' ref={itemPrice} data-price={appliedDiscount}>{formatUSD.format(appliedDiscount)}</Badge></Card.Text>
            <Card.Img variant='top' className='cover' src={item.thumbnail} alt='Product Image' ref={itemThumb} />
          </Card.Header>
          <Card.Body>
            <Card.Title ref={itemTitle}>{item.title}</Card.Title>

            <Card.Text>
              {item.description}
            </Card.Text>
            <Row>
              <Col>
                <Button onClick={handleCart}><i className='bi bi-cart-plus-fill'></i></Button>
              </Col>
              <Col className='d-flex align-items-end justify-content-end'>
                <RatingStars rating={item.rating} showRating={false} />
              </Col>
            </Row>
          </Card.Body>
        </NavLink>
      </Card>
    </Card>
  )
}
