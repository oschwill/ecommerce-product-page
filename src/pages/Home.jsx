import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

/* CSS */
import 'react-image-gallery/styles/css/image-gallery.css';
import Gallery from '../components/main/Gallery';
import ProductDescription from '../components/main/ProductDescription';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className="flex flex-col lg:border-t-2 lg:pt-24 lg:ml-28 lg:mr-28 lg:grid grid-cols-2">
          <Gallery />
          <ProductDescription />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
