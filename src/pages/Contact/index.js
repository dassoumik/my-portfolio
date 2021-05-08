import React from 'react';
import CardLayout from "../../components/CardLayout";
import SideNav from "../../components/SideNav/SideNav.js";
import API from "../../utils/API";
import "../../components/Box.css";
import "../Portfolio/Portfolio.css";

function Contact () {
    const contactData = API.contactData;

    return(
      <div className="dark-mode">
        <div className="leftMargin">
        <CardLayout className={"grid leftMargin"} data={contactData} />
        </div>
        <SideNav name="Soumik Das"/>
      </div>
      )
    
}
export default Contact;