import { NavLink } from 'react-router-dom';
import './Header.css';

/* IMAGES */
import logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <header className="flex gap-14">
      <nav className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
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
      <div>
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
