import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { ItemsPage } from '../components/pages/ItemsPage';
import { ItemPage } from '../components/pages/ItemPage';

export const Routing = () => {

    return (
        <BrowserRouter>
            <div className='header'>
                {/*<Menu/>*/}
            </div>

            <div className='body'>
                <Routes>

                    <Route path='/' element={<ItemsPage />} />
                    <Route path='/home' element={<Navigate to='/' />} />
                    {/*
                    <Route path='/login' element={<Login user={user} setUser={setUser} />} />
                    <Route path='/register' element={<Register />} />
                    */}
                    <Route path='/products/:page' element={<ItemPage />} />

                    {/*<Route path='/product/:id' element={<Profile />} />

                    <Route path='*' element={<NotFound />} />
                    */}
                </Routes>
            </div>

            <div className='footer'>
                {/*<Footer />*/}
            </div>
        </BrowserRouter>
    )
}
