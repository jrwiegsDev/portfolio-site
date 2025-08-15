import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';

// We keep the original image data outside the component
const initialImageData = [
  { src: '/daisy_and_milo.jpg', alt: 'Daisy and Milo!' },
  { src: '/me_fishing.jpg', alt: 'Me fishing, but I never touch the fish. Joshua does all the hard work.' },
  { src: '/me_joshua_fishing.JPG', alt: 'Me and Joshua after an evening of fishing!' },
  { src: '/me_playing_piano.jpg', alt: "Me playing piano, working on building my 'Elton Joe' persona..." },
  { src: '/music_with_dad.jpg', alt: 'I get my musical talent from my dad, and we love to jam out together!' },
  { src: '/Daisy_Milo.jpg', alt: 'Daisy and Milo LOVE being outside!!!' },
  { src: '/Daisy_Milo_2.jpg', alt: 'Milo always has to be near his sister Daisy...' },
  { src: '/Me_Josh_Fishing.JPG', alt: 'We love going to different parks nearby to fish in different spots!' },
  { src: '/Me_Josh_Fishing_2.JPG', alt: 'I promise we do actually catch fish and don\'t just pose for pictures near water...' },
  { src: '/Me_Josh_Zoo.JPG', alt: 'We also LOVE going to the Zoo!' },
];

function PhotoCollage() {
  // 1. We use useState to hold the shuffled list of images
  const [shuffledImages, setShuffledImages] = useState([]);

  // 2. We use useEffect to shuffle the images ONCE when the component first loads
  useEffect(() => {
    const shuffled = [...initialImageData].sort(() => 0.5 - Math.random());
    setShuffledImages(shuffled);
  }, []); // The empty array [] means this effect runs only once

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    // 3. We use the Masonry component to wrap our images
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {shuffledImages.map((image, index) => (
        <div className="image-hover-container" key={index}>
          <img src={image.src} alt={image.alt} className="collage-image" />
          <div className="image-hover-text">{image.alt}</div>
        </div>
      ))}
    </Masonry>
  );
}

export default PhotoCollage;