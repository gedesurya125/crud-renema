import React, {useState} from 'react';
import {Link} from 'react-router-dom';

//import styling default
import {componentStyle} from '../commons/componentStyle';

export const NavBar = () => {
  const {button} = componentStyle; 
  const [search, setSearch] = useState('');

  const onChangedSearch = (e) => {
    setSearch(e.target.value);
  }
  return(
    <form className="min-w-full flex">
      <Link to="/Attach" className={button.default + "mx-1"}>Attach</Link>
      <input type="text" className="flex-1 rounded" id="search" onChange={onChangedSearch} value={search}/>
      <Link to="/addUser" className={button.danger + "mx-1"}>Add Character</Link>    
    </form>  
  )
}