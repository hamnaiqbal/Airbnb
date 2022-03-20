import React from 'react';
import "./header.css";
import airbnb from "./air.png"
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='header'>
        <img className='header_icon' src={airbnb} alt=""/>


      <div className="header_center">
          <input type="text"/>
          <SearchIcon/>
      </div>

      <div className="header_right">
          <p style={{color:"gold"}}> Become a Host </p>
          < LanguageIcon/>
          <ArrowDropDownIcon/>
          <Avatar/>

          
        

      </div>
    </div>
  )
}

export default Header
