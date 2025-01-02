import React, { useState } from 'react';
import './home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    'https://i.ytimg.com/vi/3hPoEmlBQdY/maxresdefault.jpg',
    'https://www.vodafone.co.uk/newscentre/app/uploads/2024/01/GALAXY-S24_ULTRA-COMBO-KV-SV-RGB-LANDscape3x2.jpg',
    'https://img-cdn.thepublive.com/fit-in/1200x675/afaqs/media/post_attachments/704b4e8c704793ed460a2275bd7d92c4d3fc5a8019bb616875b0e1d2f2f30205.jpg',
  ];

  const changeSlide = (direction) => {
    const totalSlides = images.length;
    let newSlide = currentSlide + direction;

    if (newSlide < 0) {
      newSlide = totalSlides - 1; // Wrap to the last slide
    } else if (newSlide >= totalSlides) {
      newSlide = 0; // Wrap to the first slide
    }

    setCurrentSlide(newSlide);
  };

  return (
    <div className="slideshow">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </div>
      <button className="prev" onClick={() => changeSlide(-1)}>
        &#10094;
      </button>
      <button className="next" onClick={() => changeSlide(1)}>
        &#10095;
      </button>
    </div>
  );
};

export default Home;
