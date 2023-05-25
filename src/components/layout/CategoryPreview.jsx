import React from 'react'
import { Items } from './Items';
import { useFetch } from '../../hooks/useFetch';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { NormalizeTitle } from '../../helpers/GeneralUseFunctions'

export const CategoryPreview = ({ category, customTitle = '' }) => {

    const itemsUrl = `https://dummyjson.com/products/category/${category}?limit=3&skip=0`;

    const data = useFetch(itemsUrl);

    return (
        <div className='pb-5'>
            <h4 className='px-3 m-0'>
                <NavLink className='text-black link-underline link-underline-opacity-0 link-underline-opacity-100-hover' to={`/search?category=${category}`}>
                    {(customTitle == '') ?
                        NormalizeTitle(category)
                        :
                        customTitle
                    }
                </NavLink>
            </h4>

            <div className='px-0'>
                <Items data={data} />
            </div>

            <div className='text-center'>
                <NavLink to={`/search?category=${category}`}>
                    <Button className='rounded-pill px-4' variant='dark'>See More</Button>
                </NavLink>
            </div>
        </div>
    )
}
