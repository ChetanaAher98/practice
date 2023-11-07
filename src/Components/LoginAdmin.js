import React from 'react'
import logo from '../Images/Sumago.jpg'
import '../Components/Login.css'
import LoginFormAdmin from './LoginFormUser'

export default function LoginAdmin() {
  return (
    <>
      <div className="container-fluid  bg-light column ">
        <div className="container border frame ">
          <div className="row">

            <div className=" col-md-6 d-flex align-item-center justify-content-center"
             style={{height:"40rem"}}>
              <img src={logo} alt="" className='img-fluid rounded-circle p-5 mt-5 '
              style={{height:"30rem"}} />
            </div>

            <div className="col-md-5 mt-2">
                <LoginFormAdmin />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
