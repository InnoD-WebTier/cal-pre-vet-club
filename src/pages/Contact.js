import React, { Component } from 'react';
import '../styles/css/Contact.css';
import contactContent from '../content/ContactContent';

class Contact extends Component {
  render() {
    const officers = contactContent.map((officer, index) =>
      <div className="contact-officer">
        <p>{officer.role}</p>
        <p>{officer.name}</p>
        <p>{officer.email}</p>
      </div>
    );

    return (
      <div className="contact">
        <h2>Contact Us</h2>
        <div className="contact-officers">
          {officers}
        </div>

      </div>
    );
  }
}

export default Contact;
