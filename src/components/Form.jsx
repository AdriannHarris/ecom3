import React from 'react';
import './form.css';
function Contact() {
  return (
    <section id="contact">
      <div className="content">
        <h2></h2>
        <p>Leave us a review and tell us what you thought!</p>
      </div>
      <div className="container">
        <div className="contactInfo"></div>
        <div className="box">
          <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i>
            <div className="text">
              <h3>Headquarters</h3>
              <p>Houston, Texas</p>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i>
            <div className="text">
              <h3>Phone</h3>
              <p>704-287-6688</p>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="icon"><i className="fa fa-envelope" aria-hidden="true"></i>
            <div className="text">
              <h3>Email</h3>
              <p>velocitydealersinc@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <form id="contact-form">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />

          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

          <label htmlFor="country">Country</label>
          <select id="country" name="country">
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="australia">Austrailia</option>
          </select>

          <label htmlFor="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }} />

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
