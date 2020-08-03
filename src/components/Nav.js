import React, { useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import logo from "../images/logobb-w.png";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const NavigationLink = ({ children, to, exact }) => {
    const match = useRouteMatch({
      exact,
      path: to,
    });

    return (
      <Link
        to={to}
        className={
          match ? "bb-header__link bb-header__link--active" : "bb-header__link"
        }
      >
        {children}
      </Link>
    );
  };

  const handleNav = () => {
    setIsOpen(!isOpen);
    window.document.body.classList.toggle('bb-overflow-h');
  };

  return (
    <header className="bb-header">
      <Link className="bb-header__logo-link" to="/">
        <img className="bb-header__logo" src={logo} alt="logo" />
      </Link>
      <nav
        className={
          isOpen ? "bb-header__nav bb-header__nav--open" : "bb-header__nav"
        }
      >
        <ul className="bb-header__list">
          <li className="bb-header__item">
            <NavigationLink exact={true} to="/">
              Home
            </NavigationLink>
          </li>
          <li className="bb-header__item">
            <NavigationLink to="/characters">Characters</NavigationLink>
          </li>
          <li className="bb-header__item">
            <NavigationLink to="/episodes">Episodes</NavigationLink>
          </li>
          <li className="bb-header__item">
            <NavigationLink to="/quotes">Quotes</NavigationLink>
          </li>
          <li className="bb-header__item">
            <NavigationLink to="/deaths">Deaths</NavigationLink>
          </li>
        </ul>
      </nav>
      <div
        className={
          isOpen
            ? "bb-header__toggle-btn bb-header__toggle-btn--open"
            : "bb-header__toggle-btn"
        }
        onClick={handleNav}
      ></div>
    </header>
  );
}

export default Nav;
