import React, { useContext } from 'react'
import { funUpdateSuccessCart } from '../../../../context/actionCreators';
import { AppContext } from '../../../../context/AppContext';
import { displayQuantity, updateCart } from '../../../../utils/cartFunctions';
import styles from './Card.module.css';
const Card = ({ imageURL, price, name, data, quantity }) => {
    const { state, dispatch } = useContext(AppContext);
    const { cartItems, products } = state;
    const handleUpdate = (id, value) => {
        let updated = updateCart(id, value, cartItems, products)
        dispatch(funUpdateSuccessCart(updated));
    }
    const handleDelete = (id) => {
        let updated = cartItems.filter((el) => el.id !== id);
        dispatch(funUpdateSuccessCart(updated))
    }
    return (
        <div className={styles.box}>
            <img src={imageURL} alt={name} />
            <div>
                <h3>{name}</h3>
                <h4>{price}rs</h4>
            </div>
            <div><span onClick={() => handleUpdate(data.id, -1)}>-</span>{quantity}<span onClick={() => handleUpdate(data.id, 1)}>+</span> </div>
            <button onClick={() => handleDelete(data.id)}>Delete</button>
        </div>
    )
}

export default Card