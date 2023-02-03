import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { funSuccessProducts, GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING } from '../../context/actionCreators'
import { AppContext } from '../../context/AppContext'
import { getProductsData } from '../../utils/api'
import Card from './components/Card/Card'
import Search from './components/Search/Search'
import Sidebar from './components/Sidebar/Sidebar'
import styles from './Product.module.css'
const Product = () => {
    const { state, dispatch } = useContext(AppContext);
    const { products, loading } = state;
    useEffect(() => {
        dispatch(GET_PRODUCTS_LOADING);
        getProductsData().then((res) => {
            dispatch(funSuccessProducts(res));
        }).catch((err) => {
            dispatch(GET_PRODUCTS_ERROR)
            console.log(err)
        })
    }, []);
    return (
        <>
            <Navbar />
            <Search />
            <div className={styles.container}>
                <Sidebar />
                {loading ? <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</h1> :
                    <div className={styles.products}>
                        {
                            products.length ? products?.map((el) => (
                                <Card key={el.id} data={el} name={el.name} imageURL={el.imageURL} price={el.price} />
                            )) : <h1 style={{
                                position: "relative",
                                left: "18vw",
                                top: "20vh",
                            }}>No data found</h1>
                        }
                    </div>
                }
            </div>
        </>
    )
}

export default Product