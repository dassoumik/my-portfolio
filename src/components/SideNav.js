import React from 'react';
import './SideNav.css';

const SideNav = (props) => {
return (
<div className="sidenav" style={{ width: '15vw', paddingTop: '20px' }}>
   <a href="#section">About</a>
   <a href="#section">Portfolio</a>
   <a href="#section">Blogs</a>
   <a href="#section">Contact</a>
</div>
 );
};
export default SideNav;