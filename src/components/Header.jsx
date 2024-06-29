// Header.jsx
import React, { useEffect, useState } from "react";

function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <header className={`${scrolling ? 'border-b border-gray-900' : ''} fixed left-0 right-0 top-0 z-20`} id="home">
      <div className="container mx-auto px-4 py-6 max-w-4xl bg-black">
        <div className="flex flex-col sm:flex-row justify-between items-center relative">
          <div className="flex justify-between items-center w-full sm:w-auto">
            <h1 className="font-bold text-2xl text-white">
              Sifaq <span className="text-blue-500">Portfolio</span>
            </h1>
            {/* Tombol hamburger untuk tampilan mobile */}
            <button className="text-gray-400 hover:text-white sm:hidden" onClick={toggleMenu}>
              {isOpen ? (
                <svg
                  className="w-8 h-8 transition-transform duration-300 transform rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg
                  className="w-8 h-8 transition-transform duration-300 transform rotate-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
          {/* Navigasi utama */}
          <nav className={`${
            isOpen ? 'block' : 'hidden'
          } sm:block absolute right-0 top-full mt-2 sm:mt-0 sm:relative sm:flex sm:items-center sm:space-x-4 backdrop-blur bg-gray-900 bg-opacity-80 py-2 px-4 sm:px-6 rounded-lg sm:bg-transparent sm:backdrop-none`}>
            <ul className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0">
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white cursor-pointer">
                  Projects
                </a>
              </li>
              <li>
                <a href="#technologies" className="text-gray-400 hover:text-white cursor-pointer">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white cursor-pointer">
                  Experience
                </a>
              </li>
              <li>
                <a href="#certificate" className="text-gray-400 hover:text-white cursor-pointer">
                  Certificate
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
