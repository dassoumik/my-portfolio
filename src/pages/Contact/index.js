import React from 'react';
import CardLayout from "../../components/CardLayout";
import SideNav from "../../components/SideNav/SideNav.js";
import NavBar from "../../components/NavBar/NavBar.js";
import API from "../../utils/API";
import "../../components/Box.css";
import "../Portfolio/Portfolio.css";
import Media from "react-media";

function Contact () {
    const contactData = API.contactData;

    return(
      <div className="dark-mode">
        <NavBar/>
        <div className="leftMargin">
        <CardLayout className={"grid leftMargin"} data={contactData} />
        </div>
        <Media query="(min-width: 600px)">
        <SideNav name="Soumik Das" width="15vw"/>
        </Media>
      </div>
      )
    
}
export default Contact;