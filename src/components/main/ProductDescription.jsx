import PropTypes from 'prop-types';

/* IMAGES */
import { useContext, useState } from 'react';
import cartImage from '../../assets/images/icon-cart_button.svg';
import iconMinus from '../../assets/images/icon-minus.svg';
import iconPlus from '../../assets/images/icon-plus.svg';
import { ProductDataContext } from '../../context/Context';

const ProductDescription = ({ onHandleSetCardData }) => {
  const [count, setCount] = useState(0);

  const productData = useContext(ProductDataContext);

  return (
    <>
      {productData && productData.length > 0 && (
        <article className="w-5/6 ml-auto mr-auto pt-6 pb-8 flex flex-col gap-6 lg:mt-20 lg:gap-10 lg:w-4/6">
          <div className="flex flex-col gap-2">
            <p className="text-textFontOrange font-bold md:mb-6">{productData[0].company}</p>
            <h2 className="text-4xl font-bold mb-4">{productData[0].productName}</h2>
            <p className="text-textFontLightGrayish">{productData[0].description}</p>
          </div>
          <div className="flex justify-between items-center lg:flex-col lg:items-start lg:gap-6">
            <div className="flex gap-4 items-center">
              <p className="text-2xl font-bold">${productData[0].endPrice().toFixed(2)}</p>
              <span className="bg-backgroundPaleOrange p-1 rounded-xl pl-2 pr-2 text-textFontOrange font-bold">
                {productData[0].discount}%
              </span>
            </div>
            <div className="text-textFontLightBlue font-bold line-through">
              ${productData[0].fullPrice.toFixed(2)}
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="flex justify-between bg-buttonBackgroundPrimary p-4 rounded-lg lg:w-1/4">
              <button
                className="pl-2 hover:opacity-75"
                onClick={() => setCount((c) => (c > 1 ? c - 1 : 0))}
              >
                <img src={iconMinus} alt="minus" />
              </button>
              <p className="font-bold">{count}</p>
              <button className="pr-2 hover:opacity-75" onClick={() => setCount((c) => c + 1)}>
                <img src={iconPlus} alt="plus" />
              </button>
            </div>
            <div className="lg:w-3/4">
              <button
                className="bg-buttonBackgroundSecondary w-full flex items-center justify-center gap-4 p-4 text-white rounded-lg shadow-lg shadow-buttonBackgroundSecondary hover:opacity-75"
                onClick={() =>
                  onHandleSetCardData({
                    count,
                    productName: productData[0].productName,
                    thumbnail: productData[0].thumbnail,
                    price: productData[0].endPrice(),
                    endPrice: count * productData[0].endPrice(),
                  })
                }
              >
                <img src={cartImage} alt="cart" />
                <span>Add to cart</span>
              </button>
            </div>
          </div>
        </article>
      )}
    </>
  );
};

ProductDescription.propTypes = {
  onHandleSetCardData: PropTypes.func,
};

export default ProductDescription;
