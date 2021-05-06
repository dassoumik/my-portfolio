import React from 'react';
// import '../components/FontawesomeIcons';
import './SideNav.css';
import self from '../assets/images/self.jpg';
// import {View, Text, StyleSheet, Picker} from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


const SideNav = (props) => {
const colmd3 = "col-md-3";
const contactWrapper = "col-md-6 vertical-menu text-center d-flex in-line fixed";
const styleWrapper = "color: #b67171;";
const btnClass = "btn";
const targetBlank = "_blank";
const styleContact = "color: #d8c292;";

return (
<div className={"sidenav"} style={{ width: '15vw', paddingTop: '20px' }}>
   <h3 className="heading3">{props.name}</h3> 
   
   <div>
       <img src={self} alt="self"/>
   </div>
   <div className="prof">
       Software Developer
   </div>
   <div className="location">
       Atlanta, GA
   </div>

   <div className={"sidenavsection"}>
   {/* <a href="#section">About</a> */}
   <a href="#section">Portfolio</a>
   <a href="#section">Blogs</a>
   <a href="#section">Contact</a>
   </div>
</div>   
  
 );
}

export default SideNav;