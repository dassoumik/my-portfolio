import React from "react";
import API from "../../utils/API";
import CardLayout from '../../components/CardLayout';
import "../../components/Box.css";
import "./Portfolio.css";
import SideNav from "../../components/SideNav/SideNav.js";
import NavBar from "../../components/NavBar/NavBar.js";
import Media from "react-media";


function Portfolio() {
    const portfolioData = API.portfolioData;

  return(
    <div className="dark-mode">
       <NavBar/>
      <div className="leftMargin">
      <CardLayout className={"grid leftMargin"} data={portfolioData} />
      </div>
  <Media query="(min-width: 600px)">

      <SideNav name="Soumik Das" width="15vw"/>
  </Media>   
    </div>
  )

}

export default Portfolio;