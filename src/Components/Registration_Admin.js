import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Registration_Admin() {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmedpassword, setConfirmedpassword] = useState("")
  const [passwordMatch, setPasswordMatch] = useState(true);
  const navigate = useNavigate()

  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    e.preventDefault();

    if (password === confirmedpassword) {
    } else {
      setPasswordMatch(false);
    }

    const xyz = {
      fname, lname, email, password, confirmedpassword
    }

    axios.post("http://localhost:8080/user/add", xyz)
      .then(res => {
        console.log(res.data)
        alert("form submitted sucessfully")
      }).catch(err => {
        console.log(err)
        alert("something went wrong")
      })

    setValidated(true);
  };


  return (

    <div className='d-flex justify-content-center align-items-center vh-100  fluid' >
      <div className='p-3 bg-white rounded '>
        <center>
          <Form className='mt-5 ' noValidate validated={validated} onSubmit={handleSubmit}>
            <h1 className='mb-5'>Registration Form</h1>
            <Row >
              <Form.Group className="mb-3" controlId="formGroupfirstname">

                <Form.Control type="text" placeholder="First Name" className='inputField place text-center'
                  value={fname} onChange={(e) => setFname(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGrouplastname">

                <Form.Control type="text" placeholder="Last Name" className='inputField place text-center'
                  value={lname} onChange={(e) => setLname(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGroupEmail">

                <Form.Control type="email" placeholder="Enter email" className='inputField place text-center'
                  value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">

                <Form.Control type="password" placeholder="Password" className='inputField place text-center'
                  value={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupcPassword">

                <Form.Control type="password" placeholder="Confirmed Password" className='inputField place text-center'
                  value={confirmedpassword} onChange={(e) => setConfirmedpassword(e.target.value)} />
              </Form.Group>{!passwordMatch && <p className='text-danger'>Passwords do not match.</p>}
            </Row>
            <Button type="submit" className="my-3" >Submit form</Button>
            <p onClick={() => navigate("/loginadmin")}>Already have an Account</p>
          </Form>
        </center>
      </div>
    </div>

  );
}

export default Registration_Admin;