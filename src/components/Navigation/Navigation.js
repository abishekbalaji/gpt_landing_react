import { useState, Fragment } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

import "./Navigation.css";

const MENU = () => (
  <Fragment>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt">What is GPT?</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </Fragment>
);

const Navigation = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <div className="gpt__navigation">
      <div className="gpt__navlinks">
        <div className="gpt__navlinks_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt__navlinks_container">
          <MENU />
        </div>
      </div>
      <div className="gpt__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt__navbar-menu">
        {isMenuVisible ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setIsMenuVisible(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setIsMenuVisible(true)}
          />
        )}
        {isMenuVisible && (
          <div className="gpt__navbar-menu_container scale-up-center">
            <div className="gpt__navbar-menu_container-links">
              <MENU />
              <div className="gpt__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
