import React, { useContext, useState } from 'react'
import { AppContext } from '../../../../context/AppContext';

const Colours = () => {
    const [color, setColor] = useState({
        Red: false,
        Blue: false,
        Green: false
    })
    const { handleFilter} = useContext(AppContext);
    //-----This function will send which value have to be filter in handleFilter()-----
    const handleChange = (e) => {
        let value = e.target.name;
        if (value == 'Red') {
            if (color.Red) {
                setColor({
                    Red: false,
                    Blue: false,
                    Green: false
                })
                handleFilter([null, 'color'])
            } else {
                setColor({
                    Red: true,
                    Blue: false,
                    Green: false
                });
                handleFilter(['Red', 'color'])
            }
        } else if (value == 'Blue') {
            if (color.Blue) {
                setColor({
                    Red: false,
                    Blue: false,
                    Green: false
                })
                handleFilter([null, 'color'])
            } else {
                setColor({
                    Red: false,
                    Blue: true,
                    Green: false
                })
                handleFilter(['Blue', 'color'])
            }
        } else if (value == 'Green') {
            if (color.Green) {
                setColor({
                    Red: false,
                    Blue: false,
                    Green: false
                })
                handleFilter([null, 'color'])
            } else {
                setColor({
                    Red: false,
                    Blue: false,
                    Green: true
                })
                handleFilter(['Green', 'color'])
            }
        }
    }
    return (
        <>
            <div>
                <input name='Red' onChange={handleChange} checked={color.Red} type="checkbox" style={{ accentColor: 'red' }} />
                Red
            </div>
            <div >
                <input name='Blue' onChange={handleChange} checked={color.Blue} type="checkbox" style={{ accentColor: 'blue' }} />
                Blue
            </div>
            <div>
                <input name='Green' onChange={handleChange} checked={color.Green} type="checkbox" style={{ accentColor: 'green' }} />
                Green
            </div>
        </>
    )
}

export default Colours