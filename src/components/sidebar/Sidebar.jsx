import React from "react";
import "./sidebar.css";
import Logo from "../../assets/logo.svg";
function Sidebar() {
  return (
    <aside className="aside">
      <a href="#home" className="nav__logo">
        <img src={Logo} alt="##" />
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav_list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="icon-user-following"></i>
              </a>
            </li>{" "}
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="icon-breifcase"></i>
              </a>
            </li>{" "}
            <li className="nav__item">
              <a href="#resume" className="nav__link">
                <i className="icon-graduation"></i>
              </a>
            </li>{" "}
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="icon-layers"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="Blog" className="nav__link">
                <i className="icon-notes"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="icon-bubbles"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="footer">
        <div className="copyright"></div>
      </nav>
    </aside>
  );
}

export default Sidebar;
