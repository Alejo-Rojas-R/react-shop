import React, { useContext } from 'react'
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { RatingStars } from '../layout/RatingStars';
import { ImagesCarousel } from '../layout/ImagesCarousel';
import { CartCountContext } from '../../routes/Routing';
import { CategoryPreview } from '../layout/CategoryPreview';
import { NormalizeParagraph } from '../../helpers/GeneralUseFunctions';

export const ItemPage = () => {

  const { setCartCount } = useContext(CartCountContext);

  const { id } = useParams();

  const { data, loading } = useFetch(`https://dummyjson.com/products/${id}`);

  // Loading spinner
  if (loading === true) {
    return (
      <Container className='d-flex align-items-center justify-content-center vh-100'>
        <Spinner animation='border' />
      </Container>
    );
  }

  const formatUSD = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', });
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
    <Container>
      <Row className='pt-5 p-3'>
        <Col md={6}>
          <ImagesCarousel images={data.images} />
        </Col>
        <Col md={6} >
          <Container className='rounded bg-white p-4'>
            <h1 className='mb-2'>{data.title}</h1>
            <div className='mb-2 d-flex align-items-center'>
              <RatingStars rating={data.rating} />
            </div>
            <hr />
            <span className='opacity-50'><s>{formatUSD.format(data.price)}</s></span>
            <div className='d-flex align-items-center'>
              <h3 className='me-2' data-price={appliedDiscount}>{formatUSD.format(appliedDiscount)}</h3>
              <h6 className='text-danger'>{data.discountPercentage}% OFF</h6>
            </div>
            <hr />
            <p className='opacity-75'>{data.stock} in stock</p>
            <Button onClick={handleAddToCart} variant='outline-dark' className='rounded-pill'>Add to Cart <i className='bi bi-cart-plus'></i></Button>
          </Container>
        </Col>
      </Row>
      <Row className='p-3 pb-5'>
        <h5>Description:</h5>
        <p className='mb-2'>{NormalizeParagraph(data.description)}</p>
        <h5>Brand:</h5>
        <p className='mb-2'>{data.brand}</p>
      </Row>
      <Row className='mt-2'>
        <CategoryPreview category={data.category} customTitle='More from this category' />
      </Row>
    </Container>
  )
}
