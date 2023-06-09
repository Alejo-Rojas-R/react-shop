import React, { createContext, useState } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { ItemPage } from '../components/pages/ItemPage';
import { HomePage } from '../components/pages/HomePage';
import { SearchPage } from '../components/pages/SearchPage';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';

export const CartCountContext = createContext(null);

export const Routing = () => {

    const countCartItems = JSON.parse(localStorage.getItem('cart'))?.length;
    const [cartCount, setCartCount] = useState(countCartItems ?? 0);

    return (
        <CartCountContext.Provider value={{cartCount, setCartCount}}>
            <BrowserRouter>
                <Header />
                <div className='body'>
                    <Routes>

                        <Route path='/' element={<HomePage />} />
                        <Route path='/home' element={<Navigate to='/' />} />
                        <Route path='/product/:id' element={<ItemPage />} />

                        <Route path='/search' element={<SearchPage />} />
                        {/*
                        <Route path='*' element={<NotFound />} />
                        */}
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </CartCountContext.Provider>
    )
}
