// src/App.jsx
import React, { useState } from 'react'
import NavBar from "./components/Navbar/NavBar";
import MailboxForm from './components/MailboxForm/MailboxForm'
import MailboxList from './components/MailboxList/MailboxList'
import MailboxDetails from './components/MailboxDetails/MailboxDetails'
import { Route, Routes } from 'react-router';

const initialState = {
  boxSize: '',
  boxOwner : '',
  
};
const App = () => {

const [mailboxes,setMailboxes]=useState([])

const addBox=(formData)=>{
  const newMailbox={
 _id:mailboxes.length+1,
 boxSize:formData.boxSize,
 boxOwner:formData.boxOwner 

  }
setMailboxes([...mailboxes,newMailbox]);
       console.log(mailboxes);

}
  return (
    <>
     
        <NavBar />
        <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}  />} />
        <Route path ='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes} />} />
        <Route path='new-mailbox' element={<MailboxForm addBox={addBox} />} />
        {/* <Route path='*' element={<h2>Not Found! please Try again </h2>} /> */}
      </Routes>
   
    </>
    
  )
  
};


export default App;