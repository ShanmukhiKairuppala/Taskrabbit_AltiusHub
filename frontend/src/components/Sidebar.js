import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Navigation</h2>
    <nav>
<Link to="/ImageUpload">ImageUpload</Link>
       <Link to="/UserDetails">User Details</Link>
       
        <Link to ="/Task">Task Management</Link>
        </nav>
    </div>
  );
};  

export default Sidebar;