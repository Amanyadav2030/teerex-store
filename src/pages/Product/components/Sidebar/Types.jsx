import React, { useContext, useState } from 'react'
import { AppContext } from '../../../../context/AppContext';

const Types = () => {
    const [types, setTypes] = useState({
        Polo: false,
        Hoodie: false,
        Basic: false
    });
    const { handleFilter } = useContext(AppContext);
    //-----This function will send which value have to be filter in handleFilter()-----
    const handleChange = (e) => {
        let value = e.target.name;
        if (value == 'Polo') {
            if (types.Polo) {
                setTypes({
                    Polo: false,
                    Hoodie: false,
                    Basic: false
                })
                handleFilter([null, 'type'])
            } else {
                setTypes({
                    Polo: true,
                    Hoodie: false,
                    Basic: false
                })
                handleFilter(['Polo', 'type'])
            }
        } else if (value == 'Hoodie') {
            if (types.Hoodie) {
                setTypes({
                    Polo: false,
                    Hoodie: false,
                    Basic: false
                })
                handleFilter([null, 'type'])
            } else {
                setTypes({
                    Polo: false,
                    Hoodie: true,
                    Basic: false
                })
                handleFilter(['Hoodie', 'type'])
            }
        } else if (value == 'Basic') {
            if (types.Basic) {
                setTypes({
                    Polo: false,
                    Hoodie: false,
                    Basic: false
                })
                handleFilter([null, 'type'])
            } else {
                setTypes({
                    Polo: false,
                    Hoodie: false,
                    Basic: true
                })
                handleFilter(['Basic', 'type'])
            }
        }
    }
    return (
        <>
            <div>
                <input onChange={handleChange} name='Polo' checked={types.Polo} type="checkbox" />
                Polo
            </div>
            <div>
                <input onChange={handleChange} name='Hoodie' checked={types.Hoodie} type="checkbox" />
                Hoodie
            </div>
            <div>
                <input onChange={handleChange} name='Basic' checked={types.Basic} type="checkbox" />
                Basic
            </div></>
    )
}

export default Types