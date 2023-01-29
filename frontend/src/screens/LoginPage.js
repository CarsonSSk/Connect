import React, {useState, useEffect} from 'react';
import '../Assets/css/Login.css';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate} from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import{ login } from '../actions/userActions'
import {Link} from 'react-router-dom'


function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin)
  const {error, loading, userInfo} = userLogin

  const navigate = useNavigate();

  useEffect(
    ()=>{
    if(userInfo){
      window.location.reload(false);
      // navigate('/')
    }
  }
 );

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
    console.log("login success")
    console.log(userInfo)
  }


  return (
   <div className='formBackground'>
    {/* <div className='homeContainer'> */}
    <div className='form'>
    <span className="logo">
        <img src={process.env.PUBLIC_URL+'/logo.png'} alt="logo" ></img>
    </span>
     <span className="title">Log in</span>
     {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
    <Form className='loginForm' onSubmit={submitHandler}>
      <FormGroup >
      <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Enter your email" 
          value={email} onChange={(e)=> setEmail(e.target.value)}/>
      </FormGroup>
      <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Enter your password" 
          value={password} onChange={(e)=> setPassword(e.target.value)}/>
      </FormGroup>
      
      <Button className='loginButton' type='submit'>Submit</Button>
      </Form>
        <div>
            <p className="loginP">
              New to Connect?
              <Link to="/signUp" style={{ marginLeft: ".3rem" }}>
                Register
              </Link>
            </p>
          </div>
          <div>
            <p className="loginP">
              Forget password?
              <Link to="#" style={{ marginLeft: ".3rem" }}>
                Click her
              </Link>
            </p>
          </div>

      </div>
    {/* <div className='homeComponent'>
    <div>
    
    </div>
    </div> */}
    
    {/* </div> */}
  </div>
  );
}

export default LoginPage;