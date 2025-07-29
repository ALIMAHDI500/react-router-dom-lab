import React from 'react'
import {Link} from 'react-router'

const MailboxList = ({mailboxes})=> {
  return (
    <>
    <h2>MailBoxList</h2>

   

       <ul className='mail-box'>
        {mailboxes.map((currentbox) => (
          <li key={currentbox._id}>
         <Link to={`/mailboxes/${currentbox._id}`}>MailBox{currentbox._id} </Link>
           
          </li>
        ))}
      </ul>
        
    </>
   
  )
}

export default MailboxList