import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';

const initialImageData = [
  { src: '/daisy_and_milo.png', alt: 'Daisy and Milo!' },
  { src: '/me_fishing.png', alt: 'Me fishing, but I never touch the fish. Joshua does all the hard work.' },
  { src: '/me_joshua_fishing.png', alt: 'Me and Joshua after an evening of fishing!' },
  { src: '/me_playing_piano.png', alt: "Me playing piano, working on building my 'Elton Joe' persona..." },
  { src: '/music_with_dad.png', alt: 'I get my musical talent from my dad, and we love to jam out together!' },
  { src: '/Daisy_Milo.png', alt: 'Daisy and Milo LOVE being outside!!!' },
  { src: '/Daisy_Milo_2.png', alt: 'Milo always has to be near his sister Daisy...' },
  { src: '/Me_Josh_Fishing.png', alt: 'We love going to different parks nearby to fish in different spots!' },
  { src: '/Me_Josh_Fishing_2.png', alt: 'I promise we do actually catch fish and don\'t just pose for pictures near water...' },
  { src: '/Me_Josh_Zoo.png', alt: 'We also LOVE going to the Zoo!' },
];

function PhotoCollage() {
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    const shuffled = [...initialImageData].sort(() => 0.5 - Math.random());
    setShuffledImages(shuffled);
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {/* The only change is using image.src for the key, which is a stable, unique ID */}
      {shuffledImages.map((image) => (
        <div className="image-hover-container" key={image.src}>
          <img src={image.src} alt={image.alt} className="collage-image" />
          <div className="image-hover-text">{image.alt}</div>
        </div>
      ))}
    </Masonry>
  );
}

export default PhotoCollage;