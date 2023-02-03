import React, { useContext, useState } from 'react'
import { SearchIcon } from '../../../../assets/icons/icons';
import { FilterIcon } from '../../../../assets/icons/icons';
import { funSuccessProducts } from '../../../../context/actionCreators';
import { AppContext } from '../../../../context/AppContext';
import { getProductsData } from '../../../../utils/api';
import Colours from '../Sidebar/Colours';
import Genders from '../Sidebar/Genders';
import Prices from '../Sidebar/Prices';
import Types from '../Sidebar/Types';
import styles from './Search.module.css'
const Search = () => {
    const [name, setName] = useState('');
    const [show, setShow] = useState(false);
    const { dispatch } = useContext(AppContext);
    const handleSubmit = async (e) => {
        e.preventDefault();
        //-----Searching string with keyword-----
        let products = await getProductsData();
        let filtered = products?.filter((el) => el.name.toLowerCase().startsWith(name.toLowerCase()));
        dispatch(funSuccessProducts(filtered));
    }
    const handleChange = async (e) => {
        setName(e.target.value);
        let products = await getProductsData();
        if (name === '') {
            dispatch(funSuccessProducts(products));
        }
    }
    return (
        <div className={styles.search}>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} placeholder='Search for products...' />
                <button className={styles.submit} type='submit'>
                    {SearchIcon}
                </button>
                <button className={styles.filter} onClick={() => setShow(!show)}>
                    {FilterIcon}
                </button>
            </form>
            {show ?
                <div className={styles.filterBox}>
                    <div className={styles.box}>
                        <div>
                            <span>Color</span>
                            <Colours />
                        </div>
                        <div>
                            <span>Gender</span>
                            <Genders />
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div>
                            <span>Price</span>
                            <Prices />
                        </div>
                        <div>
                            <span>Type</span>
                            <Types />
                        </div>
                    </div>
                </div>
                : <></>}
        </div>
    )
}

export default Search