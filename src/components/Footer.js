import React from "react";
import { FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bb-footer">
      <div className="bb-footer__container bb-container">
        <ul className="bb-footer__list">
          <li className="bb-footer__item">
            Designed and Developed with <FaHeart/> by <a className="bb-footer__link" href="https://www.alaahassoun.com/">Alaa Hassoun</a>
          </li>
          <li className="bb-footer__item"> 
          <a className="bb-footer__link" href="https://breakingbadapi.com/">Breaking Bad Api</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
