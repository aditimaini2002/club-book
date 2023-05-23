import React from 'react';
import { Button} from 'react-bootstrap';
import './contactUs.css'; // Import the stylesheet
import NavBar from '../NavBar';

function ContactUs() {
  return (
    <div>
    <NavBar/>
    <div className="container">
      <header>
        <h1>Contact Us</h1>
      </header>
      <form action="submit-form.php" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="user_name" placeholder="Enter your name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="user_email" placeholder="Enter your email" required />

        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" placeholder="Enter subject" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Enter your message" required></textarea>

        <Button variant="dark" type="submit">  Submit</Button>
      </form>
    </div>
    </div>
  );
}

export default ContactUs;
