import React from 'react';
import {Card} from "react-bootstrap";
import "../Box.css";
import "../../assets/images/wdscheduler_screenshot.jpg";
import "../../assets/images/city411_screenshot.jpg";
import "../../assets/images/wired_blog.jpg";
import "../../assets/images/puppyplay_screenshot.jpg";
import "../../assets/images/codequiz_screenshot.jpg";
import "../../assets/images/mashable_blog.jpg";







function CardLayout(props) {
    const boxClass = "box box1";
    const {data} = props;
    console.log(data);
    
    const carddata = (res, index) => {
        console.log(res.image);
        return(

            <Card className={boxClass}  key={index}>
                {/* <div className="md-col-12 flex d-inline-flex imageDisp"> */}
                {/* </div> */}
                <Card.Body className="floatRight grey-mode">
                <Card.Img className="imageBox border border-2 mb-3" variant="top" src={res.image} width={"400px"} height={"200px"} style={{borderRadius: "10px"}} alt="user"/>
                <Card.Title className="text-center mb-0 pb-0" style={{ color: '#c39e5c', fontWeight: "700" }}>{res.title}</Card.Title>    
                <Card.Text className="linkFlex mt-0 pt-0"><a className="mt-2" href={res.gitRepo} style={{ textDecoration: 'none', color: '#314e52', fontWeight: "600" }}>{[res.link1name]}</a><a className="mt-2" href={res.link} style={{ textDecoration: 'none', color: '#314e52', fontWeight: "600" }}>{[res.link2name]}</a></Card.Text>
                <Card.Text></Card.Text>
                </Card.Body>
            </Card>  
       
        )
    }

    return (
        <div className="grid">
            {data.map(carddata)}
           
        </div>
    )

}

export default CardLayout;