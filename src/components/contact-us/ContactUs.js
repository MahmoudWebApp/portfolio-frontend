import React from 'react';
import {FaFacebook} from 'react-icons/fa';
import {ImTwitter,ImLinkedin2} from 'react-icons/im';
import {AiFillInstagram} from 'react-icons/ai';
import {FaPhone} from 'react-icons/fa';
import {FaRegAddressCard} from 'react-icons/fa';
import "./contact-us.scss";
const ContactUs = () => {
  return (
    <section className="contact-us" id="contact-us">
      <div className="contact-us__contact center">
      <ul className="contact-us__list">
        <li className="contact-us__item"><span><FaRegAddressCard/></span><h4>Syria / Damascus / Jaramana</h4></li>
        <li className="contact-us__item"><span>@</span><h4>raed.jomaa.hr@gmail.com</h4></li>
        <li className="contact-us__item"><span><FaPhone/></span><h4> 00963 / 0992503936</h4></li>
      </ul>
      </div>
      <div className="contact-us__follow center">
        <h3>follow me</h3>
        <div className="contact-us__follow-icon">
          <span><FaFacebook/></span>
          <span><ImTwitter/></span>
          <span><ImLinkedin2/></span>
          <span><AiFillInstagram/></span>
        </div>
      </div>
      <div className="contact-us__copyright">
    copyright&copy;ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cumque,
      </div>
    </section>
  )
}
export default ContactUs;