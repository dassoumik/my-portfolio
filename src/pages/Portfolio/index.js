import React from "react";
import API from "../../utils/API";
import CardLayout from '../../components/CardLayout';
import "../../components/Box.css";
import "./Portfolio.css";
import SideNav from "../../components/SideNav/SideNav.js";


function Portfolio() {
    const portfolioData = API.portfolioData;

  return(
    <div className="dark-mode">
      <div className="leftMargin">
      <CardLayout className={"grid leftMargin"} data={portfolioData} />
      </div>
      <SideNav name="Soumik Das"/>
    </div>
  )

}

export default Portfolio;