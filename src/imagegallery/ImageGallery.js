import React, { useState } from "react";
import "./ImageGallery.css";

function ImageGallery() {
  const images = [
    process.env.PUBLIC_URL + "/Images/Wallpaper 2.jpg",
    process.env.PUBLIC_URL + "/Images/Wallpaper 1.jpg",
    process.env.PUBLIC_URL + "/Images/Man U 3.jpg",
    process.env.PUBLIC_URL + "/Images/Man U 2.jpg",
    process.env.PUBLIC_URL + "/Images/Man U.jpg",
    process.env.PUBLIC_URL + "/Images/rev1.jpg",
    process.env.PUBLIC_URL + "/Images/rev2.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  //   event handler for the next image
  const showNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  //   event handler for previous image
  const showPreviousImage = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
  };
  return (
    <div className="image-gallery-container">
      <h2>Interactive image gallery</h2>
      <div className="gallery">
        <button className="nav-button" onClick={showPreviousImage}>
          previous
        </button>
        <img src={images[currentImageIndex]} alt="" className="gallery-image" />
        <button className="nav-button" onClick={showNextImage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ImageGallery;
