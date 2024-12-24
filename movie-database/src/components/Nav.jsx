import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 p-4 text-white text-center">
      <button
        onClick={toggleMenu}
        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500"
      >
        Menu
      </button>
      {isOpen && (
        <ul className="flex flex-col space-y-4 mt-4">
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-400 transition duration-300"
            >
        Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              Movies
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              TV Shows
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
