/* GALLERY */
import ImageGallery from 'react-image-gallery';

/* IMAGES */
import productImageOne from '../../assets/images/image-product-1.jpg';

import productImageOneThumb from '../../assets/images/image-product-1-thumbnail.jpg';
import productImageTwo from '../../assets/images/image-product-2.jpg';
import productImageTwoThumb from '../../assets/images/image-product-2-thumbnail.jpg';
import productImageThree from '../../assets/images/image-product-3.jpg';
import productImageThreeThumb from '../../assets/images/image-product-3-thumbnail.jpg';
import productImageFour from '../../assets/images/image-product-4.jpg';
import productImageFourThumb from '../../assets/images/image-product-4-thumbnail.jpg';
import { useEffect, useRef, useState } from 'react';

const imageGallery = [
  {
    original: productImageOne,
    thumbnail: productImageOneThumb,
  },
  {
    original: productImageTwo,
    thumbnail: productImageTwoThumb,
  },
  {
    original: productImageThree,
    thumbnail: productImageThreeThumb,
  },
  {
    original: productImageFour,
    thumbnail: productImageFourThumb,
  },
];

const Gallery = () => {
  const galleryRef = useRef();
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(window.screen.width);
    });
  }, []);

  const makeFullScreen = () => {
    galleryRef.current.toggleFullScreen();
  };

  return (
    <article>
      <ImageGallery
        ref={galleryRef}
        items={imageGallery}
        showPlayButton={false}
        showFullscreenButton={false}
        onClick={makeFullScreen}
        showThumbnails={screenWidth > 768 ? true : false}
      />
    </article>
  );
};

export default Gallery;
