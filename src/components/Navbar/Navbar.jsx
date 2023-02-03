import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CartIcon } from '../../assets/icons/icons';
import { AppContext } from '../../context/AppContext';
import useGetRoute from '../../hooks/useGetRoute';
import styles from './Navbar.module.css';
const Navbar = () => {
  const route = useGetRoute();
  const { state } = useContext(AppContext);
  const { cartItems } = state;
  const totalCartQuantity = () => {
    let totalQty = 0;
    cartItems?.forEach((el) => {
      totalQty += el.quantity;
    })
    return totalQty;
  }
  return (
    <div className={styles.myNavbar}>
      <div className={styles.logo}>
        <h2>TeeRex Store</h2>
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <Link to={'/'} style={route == '/' ? { borderBottom: '2.8px solid white' } : {}}>Product</Link>
          </li>
          <li>
            <Link style={route == '/cart' ? { borderBottom: '2.8px solid white', position: 'relative' } : { position: 'relative' }} to={'/cart'}>
              {CartIcon}
              <span className={styles.qty}>{totalCartQuantity()}</span>
            </Link>
          </li>
        </ul>
        <div className={styles.mobile}>
          {route == '/' ? <Link to={'/cart'} style={{ position: 'relative' }}>
            {CartIcon}
            <span className={styles.qty2}>{totalCartQuantity()}</span>
          </Link> : <Link to={'/'}>Product</Link>}
        </div>
      </div>
    </div>
  )
}

export default Navbar