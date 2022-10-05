import React from "react";

import './search-box.styles.css'

export const SearchBox = ({placeholder, handleChange}) =>(
    //We have made placeholder dynamic so if we want something else in place holder we can use it by passing the right prop
    <input className="search" type='search'
     placeholder= {placeholder}     
     onChange={handleChange} />
)