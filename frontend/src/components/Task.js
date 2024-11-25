/* Task management of users can be implemented using KanBan board or else  a simple CRUD operations  */

import {React} from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import './Task.css';

const Task = () => {    
  
    return (
        <div className="task">
            <Sidebar />
            <Header/>
            <div className="task-content">
        <h2>Task Management</h2>
        <p>Manage your tasks here</p>
        <input type="text" name="task" id="task" />
        <button  className="add-btn">Add Task</button>

       
        </div>
        </div>
    );

}
 export default Task;
