const CartList = () => {
  return (
    <div className="w-11/12 border-2 border-buttonBackgroundPrimary shadow-xl absolute top-24 ml-auto mr-auto left-0 right-0 bg-white h-2/5 rounded-lg z-50 md:w-9/12 lg:w-4/12 lg:mr-0 lg:right-20 lg:top-20 ">
      <div className="border-b-2 p-8 h-1/4">
        <h2 className="font-bold text-lg">Cart</h2>
      </div>
      <div className="font-bold text-lg flex items-center justify-center h-3/4 text-textFontLightGrayish">
        <p>Your cart is empty.</p>
      </div>
    </div>
  );
};

export default CartList;
