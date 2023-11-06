/* IMAGES */
import cartImage from '../../assets/images/icon-cart_button.svg';
import iconMinus from '../../assets/images/icon-minus.svg';
import iconPlus from '../../assets/images/icon-plus.svg';

const ProductDescription = () => {
  return (
    <article className="w-5/6 ml-auto mr-auto pt-6 pb-8 flex flex-col gap-6 lg:mt-20 lg:gap-10 lg:w-4/6">
      <div className="flex flex-col gap-2">
        <p className="text-textFontOrange font-bold md:mb-6">SNEAKER COMPANY</p>
        <h2 className="text-4xl font-bold mb-4">Fall Limited Edition Snearkers</h2>
        <p className="text-textFontLightGrayish">
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable
          rubber outer sole, they&apos;ll withstand everything the weather can offer.
        </p>
      </div>
      <div className="flex justify-between items-center lg:flex-col lg:items-start lg:gap-6">
        <div className="flex gap-4 items-center">
          <p className="text-2xl font-bold">$125.00</p>
          <span className="bg-backgroundPaleOrange p-1 rounded-xl pl-2 pr-2 text-textFontOrange font-bold">
            50%
          </span>
        </div>
        <div className="text-textFontLightBlue font-bold line-through">$250.00</div>
      </div>
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex justify-between bg-buttonBackgroundPrimary p-4 rounded-lg lg:w-1/4">
          <button className="pl-2 hover:opacity-75">
            <img src={iconMinus} alt="minus" />
          </button>
          <p className="font-bold">0</p>
          <button className="pr-2 hover:opacity-75">
            <img src={iconPlus} alt="plus" />
          </button>
        </div>
        <div className="lg:w-3/4">
          <button className="bg-buttonBackgroundSecondary w-full flex items-center justify-center gap-4 p-4 text-white rounded-lg shadow-lg shadow-buttonBackgroundSecondary hover:opacity-75">
            <img src={cartImage} alt="cart" />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductDescription;
