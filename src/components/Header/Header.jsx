import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";
import CartBlock from "./../CartBlock/CartBlock";
const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header-title">
          Game store
        </Link>
      </div>
      <div className="wrapper header__cart-btn">
        <CartBlock />
      </div>
    </div>
  );
};

export default Header;
