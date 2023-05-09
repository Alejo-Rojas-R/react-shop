import React, { useContext, useEffect, useState } from 'react'
import { Badge, Button, Card, Col, Offcanvas, Row, CloseButton } from 'react-bootstrap'
import { CartCountContext } from '../../routes/Routing';

export const CartButton = () => {
  const { cartCount, setCartCount } = useContext(CartCountContext);
  const [show, setShow] = useState(false);
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState({});

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem('cart'));

    let total = 0;
    items?.map((item) => {
      total += parseFloat(item.price);
    });

    setItems(items);
    setTotal(formatUSD.format(total));
  }, [cartCount]);

  const formatUSD = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const handleCart = () => {
    setShow(!show);
  }

  const handleRemove = (id) => {
    const removedItems = items.filter((item) => {
      return item.id != id
    }, id);

    setItems(removedItems);
    setCartCount(removedItems.length);
    localStorage.setItem('cart', JSON.stringify(removedItems));
  }

  return (
    <>
      <Button className='position-relative' variant='outline-dark' onClick={handleCart}>
        <Badge pill className='position-absolute top-100 start-100 translate-middle m-0 p-1 w-3'>{cartCount}</Badge>
        <i className='bi bi-cart-plus-fill'></i>
      </Button>

      <Offcanvas placement='end' scroll={true} backdrop={false} show={show} onHide={handleCart}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart Items</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          {items?.length > 0 && items.map((item, index) => {
            /*setTotal(total + item.price)*/
            return (
              <Card key={index} className='mb-3'>
                <Row>
                  <Col>
                    <Card.Img className='cover' src={item.image} alt='Product Image' />
                  </Col>
                  <Col className='pt-3 ps-0'>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{formatUSD.format(item.price)}</Card.Text>
                  </Col>
                </Row>
                <Button onClick={() => { handleRemove(item.id) }} variant='dark' className='position-absolute bottom-0 end-0 m-2' ><i className='bi bi-trash-fill'></i></Button>
              </Card>
            )
          })
          }

        </Offcanvas.Body>
        <Offcanvas.Title className='p-3'>Total: {total}</Offcanvas.Title>
      </Offcanvas>
    </>
  )
}
