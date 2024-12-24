import React from 'react';
import Logo from './Logo';

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <header className={`bg-gray-800 ${darkMode ? 'bg-gray-900' : ''} text-white p-4 text-center`}>
      <Logo />
      <button
        onClick={toggleDarkMode}
        className={`bg-gray-800 ${darkMode ? 'bg-gray-900' : ''} hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500`}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;


