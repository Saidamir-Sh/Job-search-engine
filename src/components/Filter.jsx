import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SingleJob from './SingleJob';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { fetchCategory, URL } from '../redux/action';

const Filter = () => {
  const dispatch = useDispatch()
  const [category, setCategory] = useState('');

  const handleCategory = (e) => {
    setCategory(e.target.value)
  }
  console.log(category)
  
  useEffect(() => {
    dispatch(fetchCategory(URL, category))
  }, [category])

  return (
    <div className='card my-2 py-2 px-3'>
      <input type="text" placeholder='Search...' />
      <div>
      <FormControl fullWidth className='my-2'>
        <InputLabel id="demo-simple-select-label">Category  </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Age"
          onChange={handleCategory}
        >
          <MenuItem value='devops'>DevOps</MenuItem>
          <MenuItem value='finance'>Finance</MenuItem>
          <MenuItem value='software developer'>Software Developer</MenuItem>
          <MenuItem value='writing'>Writing</MenuItem>
          <MenuItem value='human resources'>Human Resources</MenuItem>
          <MenuItem value='data'>Data</MenuItem>
          <MenuItem value='bussines'>Bussines</MenuItem>
          <MenuItem value='product'>Product</MenuItem>
          <MenuItem value='sales'>Sales</MenuItem>
          <MenuItem value='marketing'>Marketing</MenuItem>
          <MenuItem value='design'>Design</MenuItem>
          <MenuItem value='all other'>All others</MenuItem>
        </Select>
      </FormControl>
      </div>
      <div>
        <p>Saved Jobs</p>
      </div>
    </div>
  );
}

export default Filter;
