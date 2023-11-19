import React, { useState } from "react";

//styles
import "./Header.scss";

//icons
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Header: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header className="header" data-aos="fade-in" data-aos-delay="400">
      <nav className="nav">
        <div className="container">
          <a href="#about" className="nav__name">
            antonkashuba
          </a>

          <ul className={!isExpanded ? "nav__list" : "nav__list active"}>
            <li
              className="nav__list-item"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <a href="#about">About</a>
            </li>
            <li
              className="nav__list-item"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <a href="#skills">Skills</a>
            </li>
            <li
              className="nav__list-item"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <a href="#projects">Projects</a>
            </li>
            <li
              className="nav__list-item"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <div
            className="nav__hamburger"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {!isExpanded ? <RxHamburgerMenu /> : <AiOutlineClose />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
