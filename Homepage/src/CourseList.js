import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import {Card} from "react-bootstrap";
import {Row,Col,Container} from "reactstrap";
import BackendIMG from "../src/images/backend.png";
import FrontendIMG from "../src/images/frontend.jpg";
import DsaIMG from "../src/images/dsa.jpg";
import leetcodeIMG from "../src/images/leetcode.png";
import "../src/styles/style.css";

//adding css to Card
const mystyles = {
    cursor:"pointer",
    transition: "all ease 200ms",
    width:"18rem",
    height:"22rem",
    borderWidth:1,
    borderStyle:"solid", 
};


const CourseList = () =>{
    return(
    <>
    <Container>
        <Row>
           <Col md={4} style={{padding:"20px"}}>
           <Card  style={mystyles} className="cards">
           <Card.Img variant="top" src={BackendIMG} style={{width:"100%",height:"10rem"}} />
           <Card.Body style={{ textAlign:"center",backgroundColor:"#A7DC91"}}>
           <Card.Title style={{color:"Red",backgroundColor:"#A7DC91"}}>BackEnd</Card.Title>
           <Card.Text style={{backgroundColor:"#A7DC91"}}>
            Build the Engine Under the Hood.
           </Card.Text>
           <Button variant="transparent" style={{borderColor:"black"}}>Read More</Button>
           </Card.Body>
           </Card>
           </Col>

           <Col md={4} style={{padding:"20px"}}>
           <Card  s style={mystyles} className="cards">
           <Card.Img variant="top" src={DsaIMG} style={{width:"100%",height:"10rem"}} />
           <Card.Body style={{ textAlign:"center",backgroundColor:"#A7DC91"}}>
           <Card.Title style={{color:"Red",backgroundColor:"#A7DC91"}}>Data Structure and Algorithm</Card.Title>
           <Card.Text style={{backgroundColor:"#A7DC91"}}>
            Ace your coding skills, and solve Interview Problems
           </Card.Text>
           <Button variant="transparent" style={{borderColor:"black"}}>Read More</Button>
           </Card.Body>
           </Card>
           </Col>

           <Col md={4} style={{padding:"20px"}}>
           <Card   style={mystyles} className="cards">
           <Card.Img variant="top" src={FrontendIMG} style={{width:"100%",height:"10rem"}} />
           <Card.Body style={{ textAlign:"center",backgroundColor:"#A7DC91"}}>
           <Card.Title style={{color:"Red",backgroundColor:"#A7DC91"}}>FrontEnd</Card.Title>
           <Card.Text style={{backgroundColor:"#A7DC91"}}>
            Build Apps that work like a charm.
           </Card.Text>
           <Button variant="transparent" style={{borderColor:"black"}}>Read More</Button>
           </Card.Body>
           </Card>
           </Col>

          <Col md={4} style={{padding:"20px"}}>
          <Card   style={mystyles} className="cards">
          <Card.Img variant="top" src={leetcodeIMG} style={{width:"100%",height:"10rem"}} />
          <Card.Body style={{ textAlign:"center",backgroundColor:"#A7DC91"}}>
          <Card.Title style={{color:"Red",backgroundColor:"#A7DC91"}}>LeetCode</Card.Title>
          <Card.Text style={{backgroundColor:"#A7DC91"}}>
           The World's Leading Online Programming Learning Platform
          </Card.Text>
          <Button variant="transparent" style={{borderColor:"black"}}>Read More</Button>
          </Card.Body>
          </Card>
          </Col>

    </Row>
    </Container>
</>

    )
};

export default CourseList;