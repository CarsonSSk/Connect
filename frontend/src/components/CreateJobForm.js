// Import necessary modules
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import '../Assets/css/Login.css';
import { Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import{ create_job } from '../actions/jobActions'
import '../Assets/css/App.css'

// Define CreateJobForm component
export const CreateJobForm = () => {
    // Get user information from Redux store
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
  
    // const navigate = useNavigate();
    const dispatch = useDispatch();
  
    // Define state variables for form input fields
    const [author, setAuthor] = useState('')
    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [remote, setRemote] = useState('')
    const [status, setStatus] = useState('')
    const [active, setActive] = useState('')
    const [company, setCompany] = useState('')
    const [job_type, setJob_type] = useState('')
    const [salary, setSalary] = useState('')
    const [location, setLocation] = useState('')
    const [image, setImage] = useState('')

    // Define function to handle form submission
    const submitHandler = (e) => {
        // Dispatch action to create job listing
        e.preventDefault()
        dispatch(create_job(userInfo.email, email,title, description, remote, active, company, job_type, image, salary, location))
    }
    
    // Render form for creating job listing
    return (
    <Container className="justify-content-md-center padd">
        {userInfo ? (
            <Container className='padd'>
            <h1>Create a Job Listing</h1>
            <Form className='padd' onSubmit={submitHandler}>
                <Row className='mb-4'>
                    <Col>
                        <Label className='labelE' for='contact-name'>Contact Name</Label>
                        <Input name='contact-name' disabled id='form6Example1' label='Contact name' value={userLogin.userInfo.username} onChange={(e)=> setAuthor(e.target.value)} />
                    </Col>
                    <Col>
                        <Label className='labelE' for='contact-email'>Contact Email</Label>
                        <Input name='contact-email' disabled id='form6Example2' value={userLogin.userInfo.email} onChange={(e)=> setEmail(e.target.value)}/>
                    </Col>
                </Row>
                <Row className='mb-4'>
                    <Col>
                        <Label className='labelE' for='job-title'>Job Title</Label>
                        <Input name='job-title' id='form6Example3' value={title} onChange={(e)=> setTitle(e.target.value)} />
                    </Col>
                </Row>
                <Row className='mb-4'>
                    <Col>
                        <Label className='labelE' for='company'>Company</Label>
                        <Input name='company' id='form6Example5' value={company} onChange={(e)=> setCompany(e.target.value)}/>
                    </Col>
                </Row>
                <Row className='mb-4'>
                    <Col>
                        <Label className='labelE' for='description'>Description</Label>
                        <Input name='description' id='form6Example8' value={description} onChange={(e)=> setDescription(e.target.value)}/>
                    </Col>
                </Row>
                <Row className='mb-4'>
                    <Col>
                        <Label className='labelE' for='location'>Location</Label>
                        <Input name='location' id='form6Example4' value={location} onChange={(e)=> setLocation(e.target.value)}/>
                    </Col>
                    <Col>
                        <Label className='labelE' for='job-type'>Job Type</Label>
                        <Input name='job-type' id='form6Example6' value={job_type} onChange={(e)=> setJob_type(e.target.value)}/>
                    </Col>
                </Row>
                <Row className='mb-4'>
                    <Col>
                        <Label className='labelE' for='salary'>Salary</Label>
                        <Input id='form6Example7' label='Salary' value={salary} onChange={(e)=> setSalary(e.target.value)}/>    
                    </Col>
                    <Col>
                        <Label className='labelE' for='remote'>Remote?</Label>
                        <Input name='remote' type="checkbox" id='form6Example81'  checked={remote} onChange={(e)=> setRemote(!remote)}/>
                    </Col>
                    <Col>
                        <Label className='labelE' for='active'>Active?</Label>
                        <Input name='active' type='checkbox' id='form6Example8' checked={active} onChange={(e)=> setActive(!active)}/>
                    </Col>
                </Row>
                <Row className='mb-4'>
                    <Col>
                        <Label className='labelE' for='listing-image'>Listing Image</Label>
                        <Input name='listing-image' type="file" id='customFile' onChange={(e)=> setImage(e.target.files[0])}/>
                    </Col>
                </Row>
                <Input className='profile-button'  
                    type='submit'>
                    Create a Job
                </Input>
            </Form>
          </Container>) : (
          <Row>
          
          //Banner displaying if you are not logged in
          <Alert  className='alertLogin' key='primary' variant='primary'>
              <h5>You are not signed in! Please <a href="/login">Sign in</a> or <a href="/register">Register</a>!</h5>
          </Alert>

        </Row>)}
        

    </Container>
        


    )


}

export default CreateJobForm;
