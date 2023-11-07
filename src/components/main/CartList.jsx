import PropTypes from 'prop-types';

/* IMAGES */
import deleteImage from '../../assets/images/icon-delete.svg';

const CartList = ({ cartData }) => {
  // console.log(cartData);

  return (
    <div className="w-11/12 border-2 border-buttonBackgroundPrimary shadow-xl absolute top-24 ml-auto mr-auto left-0 right-0 bg-white h-2/5 rounded-lg z-50 md:w-9/12 lg:w-4/12 lg:mr-0 lg:right-20 lg:top-20 ">
      <div className="border-b-2 p-8 h-1/4">
        <h2 className="font-bold text-lg">Cart</h2>
      </div>
      <div
        className={`font-bold text-lg flex flex-col items-center ${
          cartData.length > 0 ? 'justify-start pt-8' : 'justify-center'
        } h-3/4 text-textFontLightGrayish overflow-y-auto`}
      >
        {cartData && cartData.length > 0 ? (
          cartData.map((card, index) => {
            return (
              <>
                <div key={crypto.randomUUID()} className="flex gap-4 items-center mt-4">
                  <img src={card.thumbnail} alt="image" className="w-16" />
                  <div>
                    <p className="font-normal">{card.productName}</p>
                    <p className="font-normal">
                      ${card.price.toFixed(2)} x {card.count}{' '}
                      <span className="font-bold text-black">${card.endPrice.toFixed(2)}</span>
                    </p>
                  </div>
                  <img
                    src={deleteImage}
                    alt="delete icon"
                    className="cursor-pointer hover:translate-"
                  />
                </div>
                {index === cartData.length - 1 && (
                  <button className="bg-buttonBackgroundSecondary w-5/6 flex items-center justify-center gap-4 p-4 text-white rounded-lg shadow-lg shadow-buttonBackgroundSecondary hover:opacity-75 mt-10 mb-6">
                    <span>Checkout</span>
                  </button>
                )}
              </>
            );
          })
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

CartList.propTypes = {
  cartData: PropTypes.array,
};

export default CartList;
