import React from "react";
import "../index.css";

const Header: React.FC = () => {
  return (
    <header className="max-w-full bg-gray-700">
      <div className="flex justify-between items-center mx-auto max-w-7xl text-white bg-gray-700">
        <h1 className="px-5 py-3 text-2xl">Pro Shop</h1>

        <nav className="px-5 py-3">
          <a className="px-5 text-gray-500">
            <i className="px-1 fas fa-shopping-cart"></i>cart
          </a>
          <a className="px-5 text-gray-500">
            <i className="px-1 fas fa-user"></i>login
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
