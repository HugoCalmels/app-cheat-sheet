import React from 'react';
import { Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{width: 100 + "vw", height: 80, backgroundColor: "lightblue"}}>
      <Link to="/"> Home </Link>
      <Link to="/about"> About </Link>
      <Link to="/projects"> Projects </Link>
    </div>
  );
};

export default Navbar;