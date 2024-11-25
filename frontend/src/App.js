import {React,useState,useEffect} from 'react';
import {useAuth0} from '@auth0/auth0-react';
import UserDetails from './components/UserDetails';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Welcome from './components/Welcome';
import Image from './components/Image';
import Task from './components/Task';
import './App.css';

function App() {
  const {loginWithRedirect, logout,user, isAuthenticated} = useAuth0();
 

  return (
    <div className="App">
     
       <Router>
      <Routes>
      <Route
          path="/"
          element={
            !isAuthenticated ? <Welcome /> : <Navigate to="/UserDetails" />
          }
        />
     <Route path="/UserDetails" element={isAuthenticated ? <UserDetails /> : <Navigate to="/" />} />
     <Route path="/ImageUpload" element={isAuthenticated ? <Image /> : <Navigate to="/" />} />
      < Route path="/Task" element={isAuthenticated ? <Task /> : <Navigate to="/" />} /> 

      </Routes>
    </Router>
    </div> 
  );
}

export default App;
