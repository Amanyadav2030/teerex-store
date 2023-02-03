import React, { useContext } from 'react';
import { funAddSuccessCart, funUpdateSuccessCart } from '../../../../context/actionCreators';
import { AppContext } from '../../../../context/AppContext';
import { checkCartItem, displayQuantity, updateCart } from '../../../../utils/cartFunctions';
import styles from './Card.module.css'
const Card = ({ imageURL, price, name, data }) => {
    const { state, dispatch } = useContext(AppContext);
    const { cartItems, products } = state;
    // -----This function will add value to the cart with quantity-----
    const handleCart = () => {
        if (data.quantity == 0) {
            alert("Item limit is exceeded");
        } else {
            dispatch(funAddSuccessCart({ ...data, quantity: 1 }));
            alert("Item added successfully");
        }
    }
    // -----This function will increment and decrement quantity-----
    const handleUpdate = (id, value) => {
        let updated = updateCart(id, value, cartItems, products)
        dispatch(funUpdateSuccessCart(updated));
    }
    return (
        <div className={styles.card}>
            <img src={imageURL} alt={name} />
            <h3>{name}</h3>
            <div>
                <span>Rs {price}</span>
                {checkCartItem(data.id, cartItems) ? <div><span onClick={() => handleUpdate(data.id, -1)}>-</span>{displayQuantity(data.id, cartItems)}<span onClick={() => handleUpdate(data.id, 1)}>+</span> </div> :
                    <button onClick={handleCart}>Add to cart</button>}
            </div>
        </div>
    )
}

export default Card