import React, { useState, useEffect } from 'react';
import Heading from '../Components/Heading/Heading';
import useSendMessage from '../firebase/hooks/useSendMessage';

const Toast = ({ message, setSubmit, setMessage }) => {
  const { feedback, error } = useSendMessage(message);
  const [toast, setToast] = useState('Sending message...')

  useEffect(() => {
    
  }, [feedback])
  
  useEffect(() => {
    let mounted = true;

    if (feedback){
      setToast('Message sent!');
    }else if(error){
      setToast('Unable to send message :(');
    }
    
    setTimeout(() => {
      if (mounted) {
        setSubmit(false);
        setMessage({
          name: '',
          email: '',
          messageText: ''
        })
      }
    },2000)
    
    return () => {
      mounted = false;
    }
  }, [feedback, error, setSubmit, setMessage])

  return (
    <div class="toast">
      <span>{toast}</span>
    </div>
  )
}

const ContactForm = (props) => {
  const { onFormSubmit, onTextChange, message } = props;
  return (
    <form autoComplete="on" onSubmit={onFormSubmit}>
      <div className="input-field">
        <input className="form-input" type="text" name="name" id="name" placeholder="Name" onChange={onTextChange} value ={message.name} required/>
      </div>
      <div className="input-field">
        <input className="form-input" type="email" name="email" id="email" placeholder="Email" onChange={onTextChange} value ={message.email} required/>
      </div>
      <div className="input-field">
        <textarea className="form-input" name="messageText" id="message" placeholder='Message' min="3" cols="30" rows="10" onChange={onTextChange} value ={message.messageText} required></textarea>
      </div>
      <button className="form-input" type="submit">
        <span>message me</span>     
      </button>
    </form>
  )
}


const Contact = () => {
  const [message, setMessage] = useState({
    name: '',
    email: '',
    messageText: ''
  })
  const [submit, setSubmit] = useState(false);


  const onFormSubmit = e => {
    e.preventDefault();
    setSubmit(true);
  }

  const onTextChange = e => {
    const { name, value } = e.target;
    setMessage({...message, [name]: value});
  }

  return (
    <div className="contact">
      <Heading title="Get in touch." />
      {submit && <Toast message={message} setMessage={setMessage} setSubmit={setSubmit}/>}
      <ContactForm onFormSubmit={onFormSubmit} onTextChange={onTextChange} message={message}
       />
    </div>
  )
}

export default Contact;
