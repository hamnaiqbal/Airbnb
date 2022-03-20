import React, { useState } from 'react';
import "./banner.css"
import Button from '@mui/material/Button';
import Search from "../Search/Search.jsx"

function Banner() {
    const [searchItem, setSearchItem]= useState("true");


  return (
    <div className='banner'>
        <div className="banner_search">
        
            {searchItem && <Search/>}
        <Button onClick={()=> setSearchItem(!searchItem) } className="banner_searchbutton" variant="outlined">{searchItem ? "Hide" : "Show Date"}</Button>
        </div>
        <div className="banner_info">
            <h1> Get out and stretch your imagination</h1>
            <h5>Plan a different kind of gayeway to discover hidden gems near you</h5>
            <Button variant="outlined">Outlined</Button>
        </div>
        
      
    </div>
  )
}

export default Banner
