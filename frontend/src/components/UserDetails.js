import {React,useState,useEffect} from 'react';
import './UserDetails.css';
import Header from './Header';
import Sidebar from './Sidebar';

function UserDetails(){
 const [users,setUsers] = useState([]);
 const [editId,setEditId] = useState(null);
 const [formData,setFormData] = useState({
  name:'',
  email:'',
  phone:'',
  gender:'',
});



useEffect(()=>{
  fetchUsers();
},[]);

const fetchUsers=async()=>{
  try{
      const response = await fetch("http://localhost:5000/users");
      const data = await response.json();
      setUsers(data);
  }
  catch(err){
    console.log("Error fetching users:",err);
  }
 };

const handleChange=(e)=>{
    const{name,value}= e.target;
    
      setFormData({...formData, [name]:value});
};


const handleSubmit=async(e)=>{
   e.preventDefault();
   const method = editId? 'PUT':'POST';
   const url = editId
   ?`http://localhost:5000/users/${editId}` 
   : `http://localhost:5000/users`;
   try{
    const response = await fetch(url, 
      {method,
        headers : {'Content-Type':'application/json'},
        body: JSON.stringify(formData)
      });
      if(!response.ok){
        throw new Error('Error in form submission');
      }
    fetchUsers();
    setFormData({name:'', email:'',phone:'',gender:''});
    setEditId(null);
   }  
   catch(err){
    console.log(err);
   }
};

const handleDelete = async(id)=>{
   try{
    const response = await fetch(`http://localhost:5000/users/${id}`,{method:'DELETE'});
    if (!response.ok) {
      throw new Error("Failed to delete user");
  }
    fetchUsers();
   }catch(err){
    console.log("Error deleting the user:",err);
   }
};

const handleEdit=(user)=>{
  setFormData({
    name:user.name,
    email:user.email,
    phone:user.phone,
    gender:user.gender,
  });
  setEditId(user._id);
};

    return (
      <div className = "Layout">
      <Header/>
      <Sidebar/>
        <div className='content'>
          <div>
            <h1>User Management</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required/>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required/>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required/>
              <div> <label>Gender : </label>
               <label><input type="radio" name = "gender" value="Male" checked = {formData.gender === 'Male'} onChange = {handleChange}/>Male</label>
               <label><input type="radio" name = "gender" value="Female" checked = {formData.gender === 'Female'} onChange = {handleChange}/>Female</label>
               </div>
                <button type="submit">{editId? 'Update user' : 'Create User'}</button> 

            </form>
            </div>
            <div>
            <h2>All users</h2>
            {users.map((user)=>(
              <div key ={user._id}>
                <span>{user.name} - {user.email}</span>
                <button onClick={()=>handleEdit(user)}>Edit</button>
                <button onClick={()=>handleDelete(user._id)}>Delete</button>
              </div>
            ))}
            </div>
        </div>
        </div>
    )
}

export default UserDetails;