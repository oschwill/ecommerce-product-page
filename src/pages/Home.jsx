import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

/* CSS */
import 'react-image-gallery/styles/css/image-gallery.css';
import Gallery from '../components/main/Gallery';
import ProductDescription from '../components/main/ProductDescription';
import CartList from '../components/main/CartList';
import { useRef, useState } from 'react';

const Home = () => {
  const [showCart, setShowCart] = useState(false);
  const [showFullImageGallery, setShowFullImageGallery] = useState(false);

  const galleryRef = useRef();

  const handleSetShowCart = () => {
    setShowCart(!showCart);
  };

  const handleSetShowFullImageGallery = () => {
    setShowFullImageGallery(!showFullImageGallery);
  };

  return (
    <>
      <Header onHandleShowCart={handleSetShowCart} />
      <main>
        <section className="flex flex-col lg:border-t-2 lg:pt-24 lg:ml-28 lg:mr-28 lg:grid grid-cols-2">
          <Gallery
            isFullScreen={false}
            onHandleSetShowFullImageGallery={handleSetShowFullImageGallery}
            galleryRef={galleryRef}
            right="right-6"
            left="left-6"
          />
          <ProductDescription />
          {showCart && <CartList />}
        </section>
        {showFullImageGallery && (
          <div className="h-full w-full bg-fullImageScreenBackgroundColor absolute top-0 flex items-center justify-center z-50">
            <div className=" z-50 top-10 right-80 cursor-pointer "></div>
            <Gallery
              isFullScreen={true}
              onHandleSetShowFullImageGallery={handleSetShowFullImageGallery}
              galleryRef={galleryRef}
              right="right-[-20px]"
              left="left-[-20px]"
            />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Home;
