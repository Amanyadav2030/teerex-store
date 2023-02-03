import React, { useContext, useState } from 'react'
import { AppContext } from '../../../../context/AppContext';

const Prices = () => {
    const [price, setPrice] = useState({
        up250: false,
        up450: false,
        more450: false
    });
    const { handleFilter} = useContext(AppContext);
    //-----This function will send which value have to be filter in handleFilter()-----
    const handleChange = (e) => {
        let value = e.target.name;
        if (value == 'up250') {
            if (price.up250) {
                setPrice({
                    up250: false,
                    up450: false,
                    more450: false
                })
                handleFilter([null, 'price'])
            } else {
                setPrice({
                    up250: true,
                    up450: false,
                    more450: false
                })
                handleFilter(['up250', 'price'])
            }
        } else if (value == 'up450') {
            if (price.up450) {
                setPrice({
                    up250: false,
                    up450: false,
                    more450: false
                })
                handleFilter([null, 'price'])
            } else {
                setPrice({
                    up250: false,
                    up450: true,
                    more450: false
                })
                handleFilter(['up450', 'price'])
            }
        } else if (value == 'more450') {
            if (price.more450) {
                setPrice({
                    up250: false,
                    up450: false,
                    more450: false
                })
                handleFilter([null, 'price'])
            } else {
                setPrice({
                    up250: false,
                    up450: false,
                    more450: true
                })
                handleFilter(['more450', 'price'])
            }
        }
    }
    return (
        <>
            <div>
                <input onChange={handleChange} name='up250' checked={price.up250} type="checkbox" />
                0-Rs250
            </div>
            <div>
                <input type="checkbox" onChange={handleChange} name='up450' checked={price.up450} />
                251-Rs450
            </div>
            <div>
                <input onChange={handleChange} name='more450' checked={price.more450} type="checkbox" />
                Rs 450
            </div>
        </>
    )
}

export default Prices