import React from 'react';
import './EmailForm.css';

const EmailForm = (props) => {
  return (

  <div className="wholeEmail">
    <h2 className="invisible" id="toast">Email Sent!</h2>
    <div className="invisible" id="emailForm">
      <h2 id="emailHede">Contact The Cottage</h2>
      <form>
        <h4>To: {props.to}</h4>
        <h4>From: <input type="text" id="emailFrom" placeholder="Your Email"/></h4>
        <h4><input type="text" id="emailSubject" placeholder="Subject Line" /></h4>
        <br />
        <textarea id="emailBody"> </textarea>
        <br />
        <button onClick={props.clickHandler} id="emailSendButton" className="smallButton">Send</button>
      </form>
    </div>
  </div>

  )
}

export default EmailForm;
