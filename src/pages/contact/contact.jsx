/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import './contact.css';
import arrow from '../../assets/icons/arrow-right-solid.svg';

function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  return (
    <main className="contact">
      <section className="contact__info">
        <h1>CONTACT</h1>
        <p>
          Interested in learning more about my projects or discussing collaboration opportunities? Feel free to reach out! I'm eager to hear your stories and work together to bring ideas to life. Let's make an impact in the digital world!
        </p>
        <h2>Address</h2>
        <p>Brasilia, Federal District</p>
        <h2>Phone</h2>
        <p>+55 (61) 9 9995-1917</p>
        <h2>E-mail</h2>
        <p>grsguiga@gmail.com</p>
      </section>
      <section className="contact__form">
        <div className="contact__form-container">
          <h1>
            CONTACT FORM
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={handleNameChange}
              required
              className="contact__form-input"
            />
            <input
              type="phone"
              placeholder="Your phone"
              value={phone}
              onChange={handlePhoneChange}
              required
              className="contact__form-input"
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={handleEmailChange}
              required
              className="contact__form-input"
            />
            <textarea
              rows="1"
              placeholder="Message"
              value={message}
              onChange={handleMessageChange}
              required
              className="contact__form-textarea"
            />
            <button type="submit" className="contact__form-button">
              SEND MESSAGE
              {' '}
              <img src={arrow} alt="Arrow" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
