import React from 'react';
import './Header.css';
import { useHistory } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from 'react-router-dom';
import Search from './Search';
    
function Header (props) {
    const history = useHistory();

    const search = () => {
        history.push('/search');
    };

    return (
        <div className='header'>
          <Link to= '/'>
          <img
          className="header_icon"
          src="https://1.bp.blogspot.com/-PB9hEzQGYb8/XGbKrRiL6KI/AAAAAAAABMo/fnRrms5Ww1MrIOb1NI-4iyEpKd2Iy6G5ACLcBGAs/s400/500_F_228938931_hV1u1s0qGpt3BBCCDGfcYkLykFZGRVKz.jpg"
          alt=""/> 

          </Link>  
          
          <div className='header_center'>
              <input type="text" onChange={ e => props.onSearchKeyWordChangeCallback(e.target.value) } />
              <SearchIcon onClick={ search } />
          </div>

          <div className='header_right'>
               <LanguageIcon />
               <ExpandMoreIcon />
               <Avatar />
          </div>

        </div>
    )
    }

export default Header
