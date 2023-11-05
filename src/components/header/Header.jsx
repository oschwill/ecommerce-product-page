import { NavLink } from 'react-router-dom';
import './Header.css';

/* IMAGES */
import logo from '../../assets/images/logo.svg';
import iconCardImage from '../../assets/images/icon-cart.svg';
import avatarProfileImage from '../../assets/images/image-avatar.png';

const Header = () => {
  return (
    <header className="flex gap-10 pb-6 pt-2">
      <div className="flex items-center justify-end w-2/4 mt-2 ">
        <img src={logo} alt="logo" />
      </div>
      <nav className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" className="md:hidden" />
        <label className="menu__btn md:hidden mt-2" htmlFor="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <li>
            <NavLink className="menu__item" href="#">
              Collections
            </NavLink>
          </li>
          <li>
            <NavLink className="menu__item" href="#">
              Men
            </NavLink>
          </li>
          <li>
            <NavLink className="menu__item" href="#">
              Women
            </NavLink>
          </li>
          <li>
            <NavLink className="menu__item" href="#">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="menu__item" href="#">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex gap-4">
        <img src={iconCardImage} alt="icon card" className="w-8 h-8" />
        <img src={avatarProfileImage} alt="profile" className="w-8 h-8" />
      </div>
    </header>
  );
};

export default Header;
