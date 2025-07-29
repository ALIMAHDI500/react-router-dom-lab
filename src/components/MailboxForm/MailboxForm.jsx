import React from 'react'
import { useNavigate } from 'react-router';
import { useState } from 'react';


 
const MailboxForm = ({addBox}) => {
  
  const [formData, setFormData] = useState({
    boxOwner: '',
    boxSize: 'Small'
});
  const navigate = useNavigate();
    const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
      console.log("Form Data",formData);

  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBox(formData);
    navigate('/mailboxes');
    
  };


  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxOwner">Name:</label>
        <input type="text"  id="boxOwner"  name="boxOwner" placeholder='name'
          value={formData.boxOwner}
          onChange={handleChange}
          required
        />
        <label htmlFor="boxSize">Select Box Size:</label>
        <select id='boxSize'  name='boxSize' onChange={handleChange} value={formData.boxSize}> <option value={'Small'}>Small </option> 
        <option value={'Medium'}> Meduim</option><option value={'Large'}> Large</option>
         
        </select>
      
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default MailboxForm