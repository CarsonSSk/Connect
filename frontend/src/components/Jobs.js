import React, { Component } from 'react'
import {Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { FiPlus } from 'react-icons/fi';
import { FaBackward, FaForward } from 'react-icons/fa';
import { TfiCommentAlt } from 'react-icons/tfi';
import '../Assets/css/Newsfeed.css';
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBPagination, 
    MDBPaginationItem, 
    MDBPaginationLink
  } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

import { salary_types, employment_terms, job_types } from '../constants/jobConstants';

export default class Jobs extends Component {
  state = {
    jobs: []
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/jobs/')
      .then(res => this.setState({ jobs: res.data }))
    }

  handleClick = job => () => {
    this.props.setjob(job)
    this.props.edit()
  }

  render() {
    const Comment = ({ author, content, createdAt }) => {
        return (
          <div style={{ marginBottom: 20 }}>
            <p>Author: {author}</p>
            <p>Content: {content}</p>
            <p>Created at: {createdAt}</p>
          </div>
        );
      };

    return (
      <>
      <Container id='container' className="justify-content-md-center" style={{marginTop: "5%", padding: "4%", paddingBottom: "0%"}}>
        <Row className='networkPosts' style={{marginLeft: "20px", marginBottom: "2%", width: "100%"}}>
          <Col xs={12} md={6} className='text-left'>
            <h1>Job Post Activity</h1>
          </Col>
          <Col xs={12} md={6} className='text-right'>
          <Container>
            <Link className='create_post_button' to='/create/job/' state={{from: "/"}}>
              <FiPlus className='icon'/><span>Create Job Post</span>
            </Link>
          </Container>
          </Col>
        </Row>
        <hr style={{ width: "96%", marginBottom: "4%" }}/>

        <Row style={{display: "flex", flexDirection: "column", alignItems: "center", marginBottom:"100px"}}>
            {this.state.jobs && Array.isArray(this.state.jobs) && this.state.jobs.map(job => (
            <Row key={job.id} style={{marginBottom: "2%", width: "100%"}}>
              <Container style={{paddingBottom:"4%"}}>
                <Col xs={12} style={{ borderRadius: "20px", boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 13px 0 rgba(0, 0, 0, 0.19)", padding: "25px", backgroundColor: "white", border: "none", marginBottom: "3%px" }}>
                <div style={{marginBottom:"2%"}}></div>
                <Row className='mb-4'>
                  <Col xs={8} md={10}>
                    <span>
                      <Link to='/job' state={{job_id: job.id}}>
                        <h2>{job.title} at {job.company}</h2>
                      </Link>
                    </span>
                  </Col>
                  <Col xs={4} md={2} style={{display:'flex', alignItems: 'center', justifyContent: 'end'}}>
                    {this.props.author == job.author ? <button onClick={this.handleClick(job)} style={{ backgroundColor: "#3D13C6", color: "white", borderRadius: "25px", padding: "5px 10px", border: "none" }}><FontAwesomeIcon icon={faPenToSquare} style={{ color: "white"}}/> </button> : <></>}
                  </Col>
                </Row>
                <Container className='darker'>
                  {job.image ? <img src={'http://localhost:8000'+job.image} alt={job.title} style={{ borderRadius: "50%", width: "auto", height: "55px", marginRight: "10px" }} /> : <></>}
                  <Row>
                    <Col xs={12}>
                      <h4>Description: </h4>
                      <p style={{whiteSpace: 'pre-wrap'}}>{job.description}</p>
                      <hr style={{width: "100%"}}/>
                    </Col>
                  </Row>
                  <Row className='mb-2'>
                    <Col sm={12} md={6} xl={4}>
                      <h4>Location: </h4>
                    </Col>
                    <Col sm={12} md={6} xl={8}>
                      <p >{job.location}</p>
                      {job.remote ? <p>Remote work possible.</p> : <p>Must be willing to work in person.</p>} 
                    </Col>
                    <hr style={{width: "100%"}}/>
                  </Row>
                  <Row className='mb-2'>
                    <Col sm={12} md={6} xl={4}>
                      <h4>Salary: </h4>
                    </Col>
                    <Col sm={12} md={6} xl={8}>
                      <p>${job.salary} {salary_types.map(type => ((type.value == job.salary_type) && <span key={type.value}>{type.name}</span>))}</p>
                    </Col>
                    <hr style={{width: "100%"}}/>
                  </Row>
                  <Row className='mb-2'>
                    <Col sm={12} md={6} xl={4}>
                      <h4>Position Type: </h4>
                    </Col>
                    <Col sm={12} md={6} xl={8}>
                      <p>{job_types.map(type => ((type.value == job.job_type) && <span key={type.value}>{type.name}</span>))}</p>
                    </Col>
                    <hr style={{width: "100%"}}/>
                  </Row>
                  <Row className='mb-2'>
                    <Col sm={12} md={6} xl={4}>
                      <h4>Employment Term: </h4>
                    </Col>
                    <Col sm={12} md={6} xl={8}>
                      <p>{employment_terms.map(type => ((type.value == job.employment_term) && <span key={type.value}>{type.name}</span>))}</p>
                    </Col>
                    <hr style={{width: "100%"}}/>
                  </Row>
                  <Row className='mb-2'>
                    <Col sm={12} md={6} xl={4}>
                      <h4>Position Type: </h4>
                    </Col>
                    <Col sm={12} md={6} xl={8}>
                      <p>{job_types.map(type => ((type.value == job.job_type) && <span key={type.value}>{type.name}</span>))}</p>
                    </Col>
                    <hr style={{width: "100%"}}/>
                  </Row>
                  <Row className='mb-2'>
                    <Col sm={12} md={6} xl={4}>
                      <h4>Posted: </h4>
                    </Col>
                    <Col sm={12} md={6} xl={8}>
                      <p>{job.created_at.slice(0, 10)}</p>
                    </Col>
                    <hr style={{width: "100%"}}/>
                  </Row>
                  <Row className='mb-2'>
                    <Col sm={12} md={6} xl={4}>
                      <h4>Application Deadline: </h4>
                    </Col>
                    <Col sm={12} md={6} xl={8}>
                      <p>{job.deadline.slice(0, 10)}</p>
                    </Col>
                    <hr style={{width: "100%"}}/>
                  </Row>
                  <Row className='mb-2'>
                    <Col sm={12} md={6} xl={4}>
                      <h4>Status: </h4>
                    </Col>
                    <Col sm={12} md={6} xl={8}>
                      <p>{job.status ? <>Applications Open</> : <>Applications Closed</>}</p>
                    </Col>
                    <hr style={{width: "100%"}}/>
                  </Row>
                  <Row className='mb-2'>
                    <Col sm={12} md={6} xl={4}>
                      <h4>Application Type: </h4>
                    </Col>
                    <Col sm={12} md={6} xl={8}>
                      <p>{(job.listing_type == 'INTERNAL') ? <>Internal</> : <a href={job.link}>External</a>}</p>
                    </Col>
                    <hr style={{width: "100%"}}/>
                  </Row>
                  <Row className='mb-1'>
                    <Col sm={12} md={6} xl={4}>
                      {job.required_docs.find(doc => doc.required === true) && <h4>Required Documents: </h4>}
                    </Col>
                    <Col sm={12} md={6} xl={8}>
                      {job.required_docs && 
                        <>
                          <ul key={job.id} style={{paddingLeft:'20px'}}>
                          {job.required_docs.map(doc => (
                            <React.Fragment key={doc.type}>
                              {doc.required && 
                                <><li>{doc.type}</li><br/></>}
                            </React.Fragment>
                          ))}
                          </ul>
                        </>
                      }
                    </Col>
                  </Row>
                <hr style={{width: "100%"}}/>
                {job.comments && job.comments.length > 0 && <h4>Comments</h4>}
                {job.comments && job.comments.length > 0 && job.comments.map(comment => (
                    
                    <Row>
                            <MDBContainer >
                            <MDBRow> 
                            <MDBCard className="mb-4 restrict-height">
                                    <MDBCardBody className='common-width '>
                                      <Row> 
                                    

                                    <div className="d-flex justify-content-between common-width">
                                        <Col>
                                            <div className="d-flex flex-row align-items-center">
                                            <MDBCardImage
                                                className="rounded-circle"
                                                src='http://localhost:8000/images/default.png'
                                                alt="avatar"
                                            />
                                            <p className="tiny">{comment.author}</p>
                                            </div>
                                        </Col>
                                        <Col><p className="small">{comment.content}</p></Col>
                                        <Col>
                                          <div className="d-flex flex-row align-items-center">
                                          <p className="tiny text-muted ">Likes ( </p>
                                          <MDBIcon
                                              far
                                              icon="thumbs-up fa-xs text-black"
                                              
                                          />
                                          <p className="small text-muted "> 3)</p>
                                          </div>
                                        </Col>
                                    </div>
                                    </Row>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBRow>
                        </MDBContainer>
                    </Row>
                ))}
                <Row className='mb-4'>
                    <Form.Control className='padd pad_down' type="text" placeholder="Comment..." />
                </Row>
                </Container>

                <Row>
                  <Col style={{display: 'flex', justifyContent: 'center'}}>
                    {job.listing_type == 'INTERNAL' ? 
                      <Button className='jobButton' id='applyLink' variant="primary">Apply</Button> : 
                      <>
                        <Button href={job.link} className='jobButton'> Apply Externally</Button>
                      </>
                    }
                  </Col>
                  <Col style={{display: 'flex', justifyContent: 'center'}}>
                    <Button className='jobButton' variant="secondary"><TfiCommentAlt className='icon'/><span style={{marginLeft: "3%"}}>Comment</span></Button>
                  </Col>
                </Row>
                </Col>
              </Container>
          </Row>
            ))}

        </Row>
      </Container>
      <Row style={{display:'flex', justifyContent: 'center', marginTop: "4%"}}>
        <nav aria-label='Page navigation example'>
          <MDBPagination className='mb-0'>
            <MDBPaginationItem>
              <MDBPaginationLink href='#'><FaBackward className='icon' style={{color: "#3a0f90"}}/></MDBPaginationLink>
            </MDBPaginationItem>
            <MDBPaginationItem>
              <MDBPaginationLink href='#' style={{color: "#3a0f90"}}>1</MDBPaginationLink>
            </MDBPaginationItem>
            <MDBPaginationItem>
              <MDBPaginationLink href='#' style={{color: "#3a0f90"}}>2</MDBPaginationLink>
            </MDBPaginationItem>
            <MDBPaginationItem>
              <MDBPaginationLink href='#' style={{color: "#3a0f90"}}>3</MDBPaginationLink>
            </MDBPaginationItem>
            <MDBPaginationItem>
              <MDBPaginationLink href='#'><FaForward className='icon' style={{color: "#3a0f90"}}/></MDBPaginationLink>
            </MDBPaginationItem>
          </MDBPagination>
        </nav>
        </Row>
    </>
    )
  }
}
