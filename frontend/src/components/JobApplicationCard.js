import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Row, Col,Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";

const JobApplicationCard = (props) => {


  return (
      
    <>
      <Card style={{ marginTop: "20px" }}>
          <Card.Body className='card_body'>
            <Row style={{display:'flex', justifyContent:'left'}}>
            <div>
              <Col style={{display:'flex', justifyContent:'left'}}>
                  <Card.Img className='img-fluid rounded-pill' 
                  style={{width:'50px'}}
                  src='#' />  
                  <Card.Title style={{marginLeft:'1rem',marginTop:'.7rem'}}>Job.title</Card.Title>             
              </Col>
              <Card.Text style={{marginLeft:'5rem'}}>Job.company</Card.Text> 
            </div>
              <Col style={{display:'flex', justifyContent:'right'}}>
                <Link to='/job' >
                    <Button variant="primary">View Details </Button>
                </Link> 
              </Col>
            </Row> 
            <hr/>
            
            <Row>
                <div>
                <Col style={{display:'flex', justifyContent:'left'}}>
                    <Card.Img className='img-fluid rounded-pill' 
                    style={{width:'50px'}}
                    src='#' />  
                    <Card.Title style={{marginLeft:'1rem',marginTop:'.7rem'}}>profile.name</Card.Title>   
                             
                </Col>
                    <Card.Text style={{marginLeft:'5rem'}}>profile.title</Card.Text> 
                </div>

                <Col style={{display:'flex', justifyContent:'right'}}>
                    <Link to="/profileScreen">
                        <Button variant="primary">View Profile</Button>
                    </Link> 
                </Col>
            </Row> 
            <hr/>

            <Row style={{display:'flex', justifyContent:'right'}}>
                <Col style={{display:'flex', justifyContent:'right'}}>
                <Button variant="danger">Remove This Application</Button>
                </Col>
            </Row>
          </Card.Body>
      </Card>

    </>
  );
};

export default JobApplicationCard;