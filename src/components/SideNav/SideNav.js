import React from 'react';
import './SideNav.css';
import self from '../../assets/images/self.jpg';
import linkedin from '../../assets/images/linkedin.jpg';
import phone from '../../assets/images/phone.jpg';
import email from '../../assets/images/email.jpg';
import github from '../../assets/images/github.jpg';
import resume from '../../assets/images/resume.jpg';


const SideNav = (props) => {

return (
<div className={"sidenav"} style={{ width: props.width, paddingTop: '20px' }}>
<div className={"sidenavsection"}>
   <a href="/portfolio"  style={{ textDecoration: 'none', color: '#c39e5c' }}>Portfolios</a>
   <a href="/blogs"  style={{ textDecoration: 'none', color: '#c39e5c' }}>Blogs</a>
   <a href="/contact"  style={{ textDecoration: 'none', color: '#c39e5c'}}>Contact</a>
   </div>
   <h3 className="heading3 mt-3 mb-3"><a className="heading3" href="/">{props.name}</a></h3> 
   
   <div className="mx-auto">
       <img src={self} alt="self"/>
   </div>
   <div className="prof">
       Software Developer
   </div>
   <div className="location">
       Atlanta, GA
   </div>
<footer className="footerContacts mt-5 pt-5 mx-auto">
<a className={"btn"} target={"_blank"} rel={"noreferrer"} href={"https://github.com/dassoumik"} ><img src={github} alt={"github"} width={"20px"} height={"20px"}/></a>
<a className={"btn"} target={"_blank"} rel={"noreferrer"} href={"https://www.linkedin.com/in/sd002"} ><img src={linkedin} alt={"linkedin"} width={"20px"} height={"20px"}/></a>
<a className={"btn"} target={"_blank"} rel={"noreferrer"} href={"tel: 904-414-6550"} data-toggle={"tooltip"} data-placement={"top"} title={"+1-904-414-6550"}><img src={phone} alt={"phone"} width={"20px"} height={"20px"}/></a>
<a className={"btn"} target={"_blank"} rel={"noreferrer"} href={"mailto:contact.soumikdas@gmail.com"} data-toggle={"tooltip"} data-placement={"top"} title={"contact.soumikdas@gmail.com"}><img src={email} alt={"email"} width={"20px"} height={"20px"}/></a>
<div className="text-center">
<a className={"btn mt-5 ml-5 pl-5"} target={"_blank"} rel={"noreferrer"} href={"https://dassoumik.github.io/resume/"} data-toggle={"tooltip"} data-placement={"top"} title={"download resume"}><img src={resume} alt={"resume"} width={"80px"} height={"60px"}/></a>
</div>           
</footer>
   
</div>   
  
 );
}

export default SideNav;