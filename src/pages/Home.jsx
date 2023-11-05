import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

/* CSS */
import 'react-image-gallery/styles/css/image-gallery.css';
import Gallery from '../components/main/Gallery';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <Gallery />
          <article></article>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
