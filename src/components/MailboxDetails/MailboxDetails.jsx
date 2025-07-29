import React from 'react'
import { useParams } from 'react-router'
const MailboxDetails = ({mailboxes}) => {

const { mailboxId }=useParams()
const singlemailbox=mailboxes.find((mail)=>(
    mail._id===Number(mailboxId)
))
 console.log(singlemailbox);
  return (
    <> 
    <div className='mail-box'> 
    <h1>Mailbox  {singlemailbox._id}</h1>
    <h2>Details</h2>
    <h3>Name : {singlemailbox.boxOwner} </h3>
    <h3>Box Size: {singlemailbox.boxSize} </h3>
   
</div>
</>
  )
}

export default MailboxDetails