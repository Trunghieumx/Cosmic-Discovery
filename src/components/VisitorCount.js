import './VisitorCount.css'
import React, { useState, useEffect } from 'react';

const VisitorCount = () => {
    const [visitorCount, setVisitorCount] = useState(0);
  
    useEffect(() => {
      let count = localStorage.getItem("visitorCount") || 0;
      count = parseInt(count) + 1;
      localStorage.setItem("visitorCount", count);
      setVisitorCount(count);
    }, []);
  
    return (
      <div className="visitor-count">
        Visitors: <span>{visitorCount}</span>
      </div>
    );
  };

export default VisitorCount;