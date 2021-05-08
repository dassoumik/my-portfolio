import React from "react";
import "../../components/Box.css";
import "../Portfolio/Portfolio.css";
import SideNavRoute from "../../components/SideNavRoute/SideNavRoute.js";


function SideNavHome() {
    return(
        <div className="dark-mode">
        {console.log("in SideNav route")}
      <SideNavRoute name="Soumik Das"/>
    </div>
  )
}

export default SideNavHome;