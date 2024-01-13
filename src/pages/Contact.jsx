import { useState } from 'react';

import { validateEmail } from '../utils/helpers';

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if(!validateEmail(email) || !name) {
      setErrorMessage('Email or name not entered properly');
      return;
    }
    if(!message) {
      setErrorMessage('Message cannot be empty');
    }
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <>
    <h2 className='text text-center'>Contact</h2>
    <div className='row text-left justify-content-center'>
      <div className='col-3'>
      <form onSubmit={handleFormSubmit}>
        <label className='form-label text'>Email</label>
        <input
          value={email}
          name='email'
          onChange={handleInputChange}
          type='email'
          className='form-control'
        />
        <label className='form-label text'>Name</label>
        <input
          value={name}
          name='name'
          onChange={handleInputChange}
          type='name'
          className='form-control'
        />
        <label className='form-label text'>Message</label>
        <textarea
          value={message}
          name='message'
          onChange={handleInputChange}
          type='message'
          className='form-control'
          rows={4}
        />
        <button className='btn' type='submit'>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className='error-text'>{errorMessage}</p>
        </div>
      )}
      </div>
      <div className='row text text-center mt-4'> 
      </div>
    </div>
    </>
  )
}
export default Contact;