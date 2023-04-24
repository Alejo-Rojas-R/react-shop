import React, { useState } from 'react'
import { CategoriesList } from '../layout/CategoriesList';
import { SearchInput } from '../layout/SearchInput';

export const HomePage = () => {

    const [search, setSearch] = useState('');

    return (
        <>
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-md-12">
                    <SearchInput />
                        <CategoriesList />
                    </div>
                </div>
            </div>
        </>
    )
}
