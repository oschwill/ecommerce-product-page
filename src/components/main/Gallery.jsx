/* GALLERY */
import ImageGallery from 'react-image-gallery';
import previousArrow from '../../assets/images/icon-previous.svg';
import nextArrow from '../../assets/images/icon-next.svg';

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
import ArrowNav from './ArrowNav';

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
    return;
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
        renderLeftNav={(onClick) => (
          <ArrowNav onClick={onClick} arrow={previousArrow} position="left-6" />
        )}
        renderRightNav={(onClick) => (
          <ArrowNav onClick={onClick} arrow={nextArrow} position="right-6" />
        )}
        showNav={screenWidth > 1024 ? false : true}
      />
    </article>
  );
};

export default Gallery;
