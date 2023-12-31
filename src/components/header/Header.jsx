import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import './Header.css';

/* IMAGES */
import logo from '../../assets/images/logo.svg';
import iconCardImage from '../../assets/images/icon-cart.svg';
import avatarProfileImage from '../../assets/images/image-avatar.png';

const Header = ({ onHandleShowCart, cartData }) => {
  return (
    <header className="flex gap-10 pt-2 md:items-center md:gap-0 mb-8 md:mb-0 ">
      <div className="flex items-center justify-end w-2/4 mt-2 md:justify-start lg:w-auto md:ml-20 md:w-1/4 md:mt-0 lg:mr-8 lg:ml-28 md:h-20">
        <img src={logo} alt="logo" className="max-w-md" />
      </div>
      <nav>
        <input id="menu__toggle" type="checkbox" className="md:hidden" />
        <label className="menu__btn md:hidden mt-2" htmlFor="menu__toggle">
          <span></span>
        </label>
        <div className="menu__box-background md:hidden">&nbsp;</div>
        <div className="menu__box flex md:relative md:left-0 md:w-auto p-0 ">
          <ul className="gap-10 lg:gap-16 md:flex mt-16 md:mt-0 ">
            <li className="hover:border-b-4 border-buttonBackgroundSecondary md:h-20 md:flex md:items-center">
              <NavLink
                className="p-3 pr-6 block font-bold md:pr-0 md:font-normal md:text-sm lg:text-base "
                href="#"
              >
                Collections
              </NavLink>
            </li>
            <li className="hover:border-b-4 border-buttonBackgroundSecondary md:h-20 md:flex md:items-center">
              <NavLink
                className="p-3 pr-6 block font-bold md:pl-0 md:pr-0 md:font-normal md:text-sm lg:text-base"
                href="#"
              >
                Men
              </NavLink>
            </li>
            <li className="hover:border-b-4 border-buttonBackgroundSecondary md:h-20 md:flex md:items-center">
              <NavLink
                className="p-3 pr-6 block font-bold md:pl-0 md:pr-0 md:font-normal  md:text-sm lg:text-base"
                href="#"
              >
                Women
              </NavLink>
            </li>
            <li className="hover:border-b-4 border-buttonBackgroundSecondary md:h-20 md:flex md:items-center">
              <NavLink
                className="p-3 pr-6 block font-bold md:pl-0 md:pr-0 md:font-normal md:text-sm lg:text-base"
                href="#"
              >
                About
              </NavLink>
            </li>
            <li className="hover:border-b-4 border-buttonBackgroundSecondary md:h-20 md:flex md:items-center">
              <NavLink
                className="p-3 pr-6 block font-bold md:pl-0 md:pr-0 md:font-normal md:text-sm lg:text-base"
                href="#"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex gap-8 md:gap-4 ml-auto lg:mr-28 items-center xl:gap-12">
        <div className="relative">
          <img
            src={iconCardImage}
            alt="icon card"
            className="w-6 h-6 lg:w-7 lg:h-7 cursor-pointer"
            onClick={onHandleShowCart}
          />
          <span className="absolute bg-buttonBackgroundSecondary text-white pl-2 pr-2 rounded-full text-sm top-[-12px] right-[-12px]">
            {cartData && cartData.length > 0 && cartData[0].count}
          </span>
        </div>
        <img
          src={avatarProfileImage}
          alt="profile"
          className="w-8 h-8 lg:w-10 lg:h-10 cursor-pointer hover:border-2 rounded-full border-buttonBackgroundSecondary"
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  onHandleShowCart: PropTypes.func,
  cartData: PropTypes.array,
};

export default Header;
