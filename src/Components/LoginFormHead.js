import Form from 'react-bootstrap/Form';
import '../Components/Login.css'
import { useState} from 'react';
import { useNavigate} from 'react-router-dom'
// import Registration from './Registration';

function LoginFormHead() {

const[email,setEmail]= useState("")
const[password,setPassword]= useState("")

const navigate = useNavigate()

return (
    <>
    <div className="container-fluid  ">
     <div className="container text-center mt-5 pt-5 ">
        <div className="row">
            {/* <h1 className='text-bolder mb-4' style={{fontSize:"3rem"}}>Login</h1> */}


        <Form>
      <Form.Group className="mb-4 fs-5" controlId="formGroupEmail">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control className='inputField my-5 mt-5' type="email"
        value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-4 fs-5" controlId="formGroupPassword">
        {/* <Form.Label>Password</Form.Label> */}
 
 
        <Form.Control className='inputField'  type="password"
         value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
      </Form.Group>
      <button type='submit' className='btn btn-primary me-4 mt-4'>Login</button>
      <button type='reset' className='btn btn-danger mt-4'>Cancel</button>
    </Form>
    <p className='mt-4'>Don't have an account. <span onClick={()=>navigate("/reghead")}>Register here</span></p>

        </div>
    </div>
    </div>
    
    </>
    
  );
}

export default LoginFormHead;