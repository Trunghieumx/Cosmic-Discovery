import "./AboutCard.css";
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import React, { useState } from 'react';

function AboutCard() {
  const mapContainerStyle = {
    width: '100%',
    height: '500px',
  };
  
  const center = {
    lat: 10.7905987,
    lng: 106.6821308,
  };
  
  const markerPosition = {
    lat: 10.7905987,
    lng: 106.6821308,
  };
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });

  const [notification, setNotification] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });


    if (value) {
      setNotification(`You entered a ${name}`);
    } else {
      setNotification('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    console.log('Your message has been sent successfully!');


    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      subject: '',
      message: ''
    });

    setNotification('Your message has been successfully submitted!');
  };

  return (
    <div>
      <div className="constellation">

      <div className="title">Introducing Group 5</div>
      <div className="content">
        Group 5 was established on November 4, 2024 with the goal of
        researching the universe. In addition to theoretical and practical
        research through research projects, our team is also particularly
        interested in space observatories around the globe. We not only learn
        about famous observatories like the (formerly) Arecibo Observatory in
        Puerto Rico, or the Keck Observatory in Hawaii, but also study the
        equipment and technology these observatories use to track and
        study planets and constellations in the solar system and distant
        regions of space. Our team also conducts research on extrasolar
        planets, constellations such as Orion, Andromeda, and giant stars in
        distant constellations. We look forward to connecting and
        collaborating with observatories around the world, to expand our
        understanding of the universe and contribute to progress in
        astronomical research. We hope that, through these studies, we will
        contribute to building a strong astronomy community, sharing knowledge
        about astronomical phenomena and discoveries from global space
        observatories.
      </div>
      <div className="title">Mission</div>
      <div className="content">
        The mission of the Cosmic Discoveries website is to provide a
        comprehensive and intuitive information platform, helping users
        explore various aspects of astronomy. The website aims to increase
        knowledge, arouse curiosity and inspire about the universe, by
        providing detailed information about planets, constellations, comets,
        astronomical theories and the latest discoveries in this field. Cosmic
        Discoveries aims to be a powerful, user-friendly educational tool that
        is easily accessible and provides an engaging experience for all.
      </div>
      <div className="contact">
              <div className="title">Contact Us</div>
              <div className="content">
                When sending an email, please clearly state the subject and content
                related to the purpose of the contact (e.g. "Research information
                request" or "Astronomy project collaboration"). For urgent questions,
                please contact directly via phone during business hours. We do not
                accept calls or messages outside business hours, but all requests will
                be processed the next business day. Thank you for contacting us!
              </div>
              <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="contact-input"
              value={formData.fullName}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="contact-input"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              className="contact-input"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="contact-input"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="contact-textarea"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="send-button">Send</button>
          </form>
              <div className="title">Group 5: Cosmic Discoveries</div>
              <div className="content">
                Address: 391A Nam Ky Khoi Nghia, Ward 14, District 3, Ho Chi Minh City
              </div>
              <div className="content">Phone number: (+84) 0836 558 625</div>
              <div className="content">Email: tuanminhcnttk08@gmail.com</div>
              <div className="content">Facebook: facebook.com/tengroup</div>
              <div className="content">
                Business hours: Monday - Friday: 9:00 AM - 6:00 PM
              </div>
              <LoadScript googleMapsApiKey="AIzaSyD8kDUOgBxf1NPAKSa3Df6rR-CfDBNELc4">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={center}
                  zoom={15}
                >
                  <Marker position={markerPosition} />
                </GoogleMap>
              </LoadScript>
            </div>
      </div>
    </div>
  
  );
}

export default AboutCard;
