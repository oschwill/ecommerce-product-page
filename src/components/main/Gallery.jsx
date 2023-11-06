import PropTypes from 'prop-types';

/* GALLERY */
import ImageGallery from 'react-image-gallery';
import previousArrow from '../../assets/images/icon-previous.svg';
import nextArrow from '../../assets/images/icon-next.svg';

/* COMPONENTS */
import ArrowNav from './ArrowNav';

/* IMAGES */
import productImageOne from '../../assets/images/image-product-1.jpg';
import productImageOneThumb from '../../assets/images/image-product-1-thumbnail.jpg';
import productImageTwo from '../../assets/images/image-product-2.jpg';
import productImageTwoThumb from '../../assets/images/image-product-2-thumbnail.jpg';
import productImageThree from '../../assets/images/image-product-3.jpg';
import productImageThreeThumb from '../../assets/images/image-product-3-thumbnail.jpg';
import productImageFour from '../../assets/images/image-product-4.jpg';
import productImageFourThumb from '../../assets/images/image-product-4-thumbnail.jpg';

/* HOOKS */
import { useEffect, useState } from 'react';

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

const Gallery = ({ isFullScreen, onHandleSetShowFullImageGallery, galleryRef, right, left }) => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(window.screen.width);
    });
  }, []);

  return (
    <article>
      {isFullScreen && (
        <p
          className="text-4xl font-bold text-white hover:text-textFontOrange text-right pb-4 cursor-pointer"
          onClick={onHandleSetShowFullImageGallery}
        >
          x
        </p>
      )}
      <ImageGallery
        ref={!isFullScreen ? galleryRef : null}
        items={imageGallery}
        showPlayButton={false}
        showFullscreenButton={false}
        onClick={screenWidth > 1024 && !isFullScreen ? onHandleSetShowFullImageGallery : null}
        showThumbnails={screenWidth > 768 ? true : false}
        renderLeftNav={(onClick) => (
          <ArrowNav onClick={onClick} arrow={previousArrow} position={left} />
        )}
        renderRightNav={(onClick) => (
          <ArrowNav onClick={onClick} arrow={nextArrow} position={right} />
        )}
        showNav={screenWidth > 1024 && !isFullScreen ? false : true}
        startIndex={isFullScreen && galleryRef.current ? galleryRef.current.getCurrentIndex() : 0}
      />
    </article>
  );
};

Gallery.propTypes = {
  isFullScreen: PropTypes.bool,
  onHandleSetShowFullImageGallery: PropTypes.func,
  galleryRef: PropTypes.object,
  right: PropTypes.string,
  left: PropTypes.string,
};

export default Gallery;
