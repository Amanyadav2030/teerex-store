import React, { useContext } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { AppContext } from '../../context/AppContext';
import Card from './components/Card/Card';
import styles from './ShoppingCart.module.css';
const ShoppingCart = () => {
  const { state } = useContext(AppContext);
  const { cartItems } = state;
  const totalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((el) => {
      totalPrice += (el.price * el.quantity)
    });
    return totalPrice;
  };
  return (
    <>
      <Navbar />
      <h2 style={{ color: '#0e1823', textAlign: 'center', background: '#d6d6d6', marginTop: '0', padding: '0.4rem' }}>Shopping Cart</h2>
      <div className={styles.container}>
        {
          cartItems?.map((el) => (
            <Card key={el.id} data={el} quantity={el.quantity} imageURL={el.imageURL} name={el.name} price={el.price} />
          ))
        }
        <hr />
        <div className={styles.total}><h3>Total amount</h3><span>Rs. {totalPrice()}</span></div>
      </div>
    </>
  )
}

export default ShoppingCart