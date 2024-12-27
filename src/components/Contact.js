import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./Contact.css";

function Contact() {
  const mapContainerStyle = {
    width: "100%",
    height: "350px", // Đặt chiều cao cố định cho bản đồ
  };

  const center = {
    lat: 10.7905987, // Vĩ độ của vị trí trung tâm
    lng: 106.6821308, // Kinh độ của vị trí trung tâm
  };

  const markerPosition = {
    lat: 10.7905987,
    lng: 106.6821308,
  };

  return (
    <div className="contact-wrapper">
      <div className="contact">
        <div className="title">Contact information</div>
        <div className="content">Group 5: Cosmic Discoveries</div>
        <div className="content">
          Address: 391A Nam Ky Khoi Nghia, Ward 14, District 3, Ho Chi Minh City
        </div>
        <div className="content">Phone number: (+84) 0836 558 625</div>
        <div className="content">Email: tuanminhcnttk08@gmail.com</div>
        <div className="content">Facebook: facebook.com/tengroup</div>
        <div className="content">
          Business hours: Monday - Friday: 9:00 AM - 6:00 PM
        </div>
        <div className="title">Contact instructions</div>
        <div className="content">
          When sending an email, please clearly state the subject and content
          related to the purpose of the contact (e.g. "Research information
          request" or "Astronomy project collaboration"). For urgent questions,
          please contact directly via phone during business hours. We do not
          accept calls or messages outside business hours, but all requests will
          be processed the next business day. Thank you for contacting us!
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
  );
}

export default Contact;
