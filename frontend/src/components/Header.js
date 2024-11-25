import React from "react";
import './Header.css';
import { useAuth0 } from '@auth0/auth0-react';
const Header = () => {  
    const {logout} = useAuth0();
    return (
        <div className="header">
         <nav>
            <button className="logout-btn" onClick={() => logout()}>Logout</button>
            

         </nav>
        </div>
    );
    };

export default Header;