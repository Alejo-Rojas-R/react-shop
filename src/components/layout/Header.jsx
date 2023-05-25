import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { SearchInput } from './SearchInput';
import { NavDropdown, Navbar, Container, Nav, Stack } from 'react-bootstrap';
import { CategoriesList } from './CategoriesList';
import { CartButton } from './CartButton';

export const Header = () => {

    return (
        <Navbar expand='md' className='p-3' bg='white' variant='white'>
            <Container fluid>
                <Navbar.Brand>
                    <NavLink className='navbar-brand m-0 text-info font-weight-bold' to='/'>
                        <i className='bi bi-cart4'></i>
                        <span className='ps-2'><span className='text-black'>e</span>Shop</span>
                    </NavLink>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls='navbar-nav' />
                <Navbar.Collapse id='navbar-nav'>
                    <Nav className='gap-md-3'>
                        <Nav.Link as={NavLink} to='/' className='text-dark link-underline link-underline-opacity-0'>
                            Home
                        </Nav.Link>

                        <Nav.Link as={NavLink} to='/About' className='text-dark link-underline link-underline-opacity-0'>
                            About
                        </Nav.Link>

                        <Nav.Link as={NavLink} to='/Contact' className='text-dark link-underline link-underline-opacity-0'>
                            Contact
                        </Nav.Link>

                        <NavDropdown title="Categories">
                            <CategoriesList variant='dropdown' />
                        </NavDropdown>
                    </Nav>
                    <Container className='d-flex justify-content-md-end m-0 p-0'>
                        <SearchInput collapsible={false} />
                        <CartButton />
                    </Container>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
