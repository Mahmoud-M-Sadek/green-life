
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavLinks = ({ isMobile, closeMenu }: { isMobile: boolean; closeMenu: () => void; }) => {
  const linkClasses = `block py-2 px-3 rounded hover:bg-primary-dark md:hover:bg-transparent md:hover:text-primary md:p-0 transition-colors duration-300`;
  const activeLinkClasses = `text-white bg-primary md:bg-transparent md:text-primary-dark`;

  const links = [
    { to: "/", text: "الرئيسية" },
    { to: "/about", text: "من نحن" },
    { to: "/services", text: "خدماتنا" },
    { to: "/projects", text: "مشاريعنا" },
    { to: "/articles", text: "مقالات" },
    { to: "/contact", text: "تواصل معنا" },
  ];

  return (
    <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white`}>
      {links.map((link) => (
        <li key={link.to}>
          <NavLink
            to={link.to}
            className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : 'text-gray-900'}`}
            onClick={closeMenu}
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-bold whitespace-nowrap text-primary">جرين لايف</span>
        </Link>
        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
          <Link to="/contact">
            <button type="button" className="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors duration-300">
              اطلب عرض سعر
            </button>
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}
          id="navbar-sticky"
        >
          <NavLinks isMobile={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
