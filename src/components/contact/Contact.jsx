import React from "react";
import { GrMail } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <GrMail className="contact__option-icons" />
            <h4>Email</h4>
            <h5>rajuvenkatesh29@gmail.com</h5>
            <a href="mailto:rajuvenkatesh29@gmail.com">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icons" />
            <h4>LinkedIn</h4>
            <h5>Venkatesh B</h5>
            <a
              href="https://www.linkedin.com/in/venkatesh-b29/"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icons" />
            <h4>WhatsApp</h4>
            <h5>+91 9444019976</h5>
            <a href="https://api.whatsapp.com/send?phone=9444019976">
              Send a Message
            </a>
          </article>
        </div>
        <form className="hello" action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
