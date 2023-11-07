import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { ProductDataContext } from './context/Context';
/* data */
import { data } from './data/productData';
import { useEffect, useState } from 'react';

function App() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    setProductData(data);
  }, []);

  return (
    <>
      <ProductDataContext.Provider value={productData}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ProductDataContext.Provider>
    </>
  );
}

export default App;
