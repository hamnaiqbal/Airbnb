import React, { useState } from 'react';
import "./search.css"
import {DateRangePicker} from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css"
import PeopleIcon from '@mui/icons-material/People';
import Button from '@mui/material/Button';

function Search() {
  const [startDate, setStartDate] =useState(new Date());
  const [endDate, setEndDate] =useState(new Date());

  const selectionRange= {
    startDate:startDate,
    endDate:endDate,
    key:"selection",
  }

  function handleSelect(ranges){
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);

  }
  return (
    <div className='search'>
      <DateRangePicker ranges={
        [selectionRange]} onChange={handleSelect} />

        <h2> Number Of Guest <PeopleIcon/></h2>
        <input type="number" min={0} defaultValue={2}/>
        <Button> Search AirBnB </Button>
      
    </div>
  )
}

export default Search
