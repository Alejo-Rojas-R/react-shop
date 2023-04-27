import React from 'react'
import { NavLink } from 'react-router-dom';
import { SearchInput } from './SearchInput';
import { NavDropdown, Navbar, Container, Nav } from 'react-bootstrap';
import { CategoriesList } from './CategoriesList';

export const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Navbar expand="lg">
                    <Container fluid>
                        <Navbar.Brand>
                            <NavLink className='navbar-brand m-0' to='/'>
                                <img alt='' src='/src/assets/shopping-basket-blue-clipart-md.png' width='30' height='30' className='d-inline-block align-top me-2' />
                                MyShop
                            </NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse >
                            <Nav>
                                <NavDropdown title="Categories">
                                    <CategoriesList direction={'vertical'} />
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <SearchInput />
            </div>
        </nav>
    )
}
