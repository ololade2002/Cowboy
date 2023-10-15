

import React from 'react'
import { useState } from 'react';
import {providersData} from '../../utils/utilsData'

const Carousel = () => {
const [activeSlide, setActiveSlide] = useState(0);
const handleNext = () => {
    setActiveSlide((activeSlide + 1) % slides.length);
  };

  const handlePrevious = () => {
    setActiveSlide((activeSlide - 1 + slides.length) % slides.length);
  }; 
    
  return (
    <div className="carousel">
      <div className="slides">
       {providersData.map((item,index) => (
        <div  key={item.id} className={`item ${index === activeSlide ? 'active' : ''}`}>
        <p>{item.country}</p>
        </div>
       ))}
      </div>
      <div className="navigation">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default Carousel


