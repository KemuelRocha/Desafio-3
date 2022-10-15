import React from 'react';

import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Profile from './pages/profile/ProfileView';
import FindUserView from './pages/find-user/FindUserView';
import NavBar from './components/NavBar';

function App() {

  // JavaScript
 
  return (
    <div>
      <NavBar /> 

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/finduser" element={<FindUserView />} />
      </Routes>  


    </div>
  );
}

export default App;
