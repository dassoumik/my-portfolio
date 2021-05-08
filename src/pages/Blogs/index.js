import React from 'react';
import CardLayout from "../../components/CardLayout";
import SideNav from "../../components/SideNav/SideNav.js";
import API from "../../utils/API";
import "../../components/Box.css";
import "../Portfolio/Portfolio.css";




function Blogs () {
    const blogsData = API.blogsData;

    return(
      <div className="dark-mode">
        <div className="leftMargin">
        <CardLayout className={"grid leftMargin"} data={blogsData} />
        </div>
        <SideNav name="Soumik Das"/>
      </div>
    )
    
}

export default Blogs;