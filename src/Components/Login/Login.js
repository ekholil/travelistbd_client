import { CCard, CCardBody, CCardText, CCardTitle } from '@coreui/react';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';


const Login = () => {
    const {loginUsingGoogle, error} = UseAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home'
    const handleGoogleLogin = () => {
        loginUsingGoogle()
        .then((result) => {
           history.push(redirect_uri)
        })
    }



    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            <CCard style={{ width: '30rem', margin:'50px 0' }}>
  
            <CCardBody>
                <CCardTitle className="fs-2 my-5 text-center">Please Login</CCardTitle>
                <CCardText>
                <div onClick={handleGoogleLogin} className="d-flex align-items-center justify-content-center border rounded-pill py-2 mb-4" style={{userSelect:'none', cursor:'pointer'}}>
                    <img src="/google.svg" alt="" />
                    <span className="fs-5 ms-2">Continue With Google</span>
                </div>
                <p>{error}</p>
                <p className="text-center block">Don't have account? Create Now</p>
                </CCardText>
                
            </CCardBody>
            </CCard>
        </div>
    );
};

export default Login;