import React from 'react';
import {robots} from '../robots';
const SearchBox = ({searchField, searchChange}) => {
 return (
    <input 
     type = 'searchbox' 
     placeholder = 'Search Robots'
     className = 'pa3 ba b--green bg-lightest-blue'
     onChange={searchChange}
     />
 )
}
export default SearchBox;