import React from 'react';
import './Login.css';
import GoogleButton from 'react-google-button'


function Login(){
const gitLogin = () => {
    window.open("https://myportfolioq.herokuapp.com/auth/github", "_self");
}

    return(
        <div className="container">
            <h1>Login for Admins only</h1>
            <div className="button">
            <GoogleButton label='Google Login' type="light"
            onClick={gitLogin}
            />
            </div>
        </div>
        
        
    );
}
export default Login;