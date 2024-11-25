import "./Welcome.css";
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Welcome = () => {
    const { loginWithRedirect } = useAuth0();
    return <div className="welcome">
        <h1>Welcome to the Home Page</h1>
        <p>Please login to continue</p> 
        <button className="login-btn" onClick={() => loginWithRedirect()}>Login</button>      

    </div>;
};

export default Welcome;
