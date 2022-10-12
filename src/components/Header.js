import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
  
      <div className='nav'>
        <NavLink to="/Home" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/Stuff" className="nav-link">
          Stuff
        </NavLink>
        <NavLink  to="/Contacts" className="nav-link">
          Contacts
        </NavLink>
      </div>
    
  );

};

export default Header;
