import React, { useState, useEffect } from "react";
import './ScrollingSticker.css'
const ScrollingSticker = () => {
  const [dateTime, setDateTime] = useState("");
  const [location, setLocation] = useState("Location: Not Available");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      const formattedDate = now.toLocaleDateString(undefined, options);
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`Date: ${formattedDate} | Time: ${formattedTime}`);
    };

    const getLocation = async () => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const address = await reverseGeocode(latitude, longitude);
          setLocation(`Location: ${address}`);
        },
        () => {
          setLocation("Location: Not Available");
        }
      );
    };

    const reverseGeocode = async (latitude, longitude) => {
      const apiKey = "a97df33fc165479e8dafc94536af4c73"; 
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          return data.results[0].formatted; // get the first result 
        } else {
          console.error("Reverse Geocoding failed:", data);
          return "Address not found";
        }
      } catch (error) {
        console.error("Error with Reverse Geocoding:", error);
        return "Error occurred";
      }
    };

    updateDateTime();
    getLocation();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="scrolling-sticker">
      <span>{dateTime} | {location}</span>
    </div>
  );
};

export default ScrollingSticker;
