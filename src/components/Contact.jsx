import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <p className="contact-label">Get In Touch</p>

          <h2>Let's Plan Your Next Event</h2>

          <p className="contact-intro">
            Need event planning, equipment hire, or production support?
            Contact Opium Events and our team will help bring your vision to life.
          </p>

          <div className="contact-info-grid">
            <div className="contact-info-card">
              <span>📞</span>
              <div>
                <h4>Office</h4>
                <p>+27 10 023 4807</p>
              </div>
            </div>

            <div className="contact-info-card">
              <span>✉️</span>
              <div>
                <h4>Email</h4>
                <p>info@opiumevents.co.za</p>
              </div>
            </div>

            <div className="contact-info-card">
              <span>📍</span>
              <div>
                <h4>Address</h4>
                <p>67 Van Rensburg Avenue, Klipfontein, Witbank</p>
              </div>
            </div>

            <div className="contact-info-card">
              <span>📱</span>
              <div>
                <h4>Direct Contacts</h4>
                <p>Leeroy: +27 66 201 3689</p>
                <p>Willing: +27 81 470 7892</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <h3>Send an Enquiry</h3>

          <form>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email address" />
            </div>

            <div className="form-group">
              <label>Service Needed</label>
              <select defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option>Event Planning & Management</option>
                <option>Wedding Coordination</option>
                <option>Corporate Event Production</option>
                <option>Equipment Hire</option>
                <option>General Enquiry</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell us about your event and how we can help"></textarea>
            </div>

            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;