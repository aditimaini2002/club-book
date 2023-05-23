import { useState, useEffect } from 'react';

function ImageSlider({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [currentSlide, images.length]);

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          style={{ display: currentSlide === index ? 'block' : 'none' }}
        />
      ))}
    </div>
  );
}
