import React, { useContext, useState } from 'react'
import { AppContext } from '../../../../context/AppContext';

const Genders = () => {
  const [gender, setGender] = useState({
    Men: false,
    Women: false
  });
  const { handleFilter} = useContext(AppContext);
  //-----This function will send which value have to be filter in handleFilter()-----
  const handleChange = (e) => {
    let value = e.target.name;
    if (value == 'Men') {
      if (gender.Men) {
        setGender({
          Men: false,
          Women: false
        })
        handleFilter([null, 'gender'])
      } else {
        setGender({
          Men: true,
          Women: false
        });
        handleFilter(['Men', 'gender'])
      }
    } else if (value == 'Women') {
      if (gender.Women) {
        setGender({
          Men: false,
          Women: false
        })
        handleFilter([null, 'gender'])
      } else {
        setGender({
          Men: false,
          Women: true
        })
        handleFilter(['Women', 'gender'])
      }
    }
  }
  return (
    <>
      <div>
        <input onChange={handleChange} name='Men' checked={gender.Men} type="checkbox" />
        Men
      </div>
      <div>
        <input onChange={handleChange} name='Women' checked={gender.Women} type="checkbox" />
        Women
      </div></>
  )
}

export default Genders