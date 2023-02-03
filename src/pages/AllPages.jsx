import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Product from './Product'
import ShoppingCart from './Shopping/ShoppingCart';
const NoMatch = () => (
    <h3 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        URL Not Found. <Link to="/">Go back home.</Link>
    </h3>
);
const AllPages = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Product />} />
            <Route path={'*'} element={<NoMatch />} />
            <Route path={'/cart'} element={<ShoppingCart />} />
        </Routes>
    )
}

export default AllPages