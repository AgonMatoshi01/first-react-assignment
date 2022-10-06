import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
  
      <div className='nav'>
        <NavLink to="/Home" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/Stuff" activeClassName="active">
          Stuff
        </NavLink>
        <NavLink  to="/Contacts" activeClassName="active">
          Contacts
        </NavLink>
      </div>
    
  );

};

export default Header;
