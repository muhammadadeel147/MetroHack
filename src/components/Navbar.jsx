// src/components/Navbar.js
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
const Navbar = () => {
 

  const start = (
    <div className="p-mr-2 abc">
       <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <h3 className="p-mr-2">Food Saviour</h3>
    </Link>
     
    </div>
  );

  const end = (
    <div className="p-d-flex">
      <Link to="/login">
        <Button label="Login" className="p-mr-2" />
      </Link>
      <Link to="/registration">
        <Button label="Sign Up" className="p-button-primary" />
      </Link>
    </div>
  );


  return (
    <div>
      <Menubar  start={start} end={end} />
    </div>
  );
};

export default Navbar;
