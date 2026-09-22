import { useState } from 'react';
import { RowsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/rows.css';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import { galleryPhotos } from '../data/photosData';

// Lightbox slides use the same optimized variants, with the caption shown below the photo
const slides = galleryPhotos.map(({ src, width, height, srcSet, alt, caption }) => ({
  src, width, height, srcSet, alt, description: caption
}));

// Shorter rows on narrow screens so portrait photos stay a reasonable size
const targetRowHeight = (containerWidth) => {
  if (containerWidth < 500) return 160;
  if (containerWidth < 900) return 210;
  return 260;
};

function PhotoGallery() {
  const [index, setIndex] = useState(-1); // -1 = lightbox closed

  return (
    <div className="photo-gallery">
      <RowsPhotoAlbum
        photos={galleryPhotos}
        targetRowHeight={targetRowHeight}
        spacing={10}
        sizes={{
          size: 'calc(100vw - 64px)',
          sizes: [{ viewport: '(max-width: 768px)', size: 'calc(100vw - 32px)' }]
        }}
        componentsProps={{ image: { loading: 'lazy', decoding: 'async' } }}
        onClick={({ index: clickedIndex }) => setIndex(clickedIndex)}
      />

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Captions]}
      />
    </div>
  );
}

export default PhotoGallery;
