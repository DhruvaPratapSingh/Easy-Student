import React, { useState } from 'react';
import { FaBars, FaArrowRight, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '/OIP.jpeg';
import Icon from '/coder_logo.avif';  

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [linksVisible, setLinksVisible] = useState(true);

  const handleClick = () => {
    setLinksVisible(false);
    setIsMenuOpen(false);
  };

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setLinksVisible(true);
  };

  return (
    <nav className="flex justify-between items-center w-full p-4 bg-slate-300 shadow-2xl border-b-2 border-b-slate-400 rounded-b-lg relative">
      <Link to="/" id="brand" className="flex gap-2 items-center flex-1">
        <img className="object-cover max-w-12 max-h-12" src={logo} alt="Logo" />
        <span className="text-lg font-medium font-display">EasyStudent</span>
      </Link>
      <div id="nav-menu" className="hidden lg:flex gap-12">
        <Link to="/" className="font-medium hover:text-primary">home</Link>
        <Link to="/contest" className="font-medium hover:text-primary">contest</Link>
        <Link to="/internship" className="font-medium hover:text-primary">internship</Link>
        <Link to="/preparation" className="font-medium hover:text-primary">Prep_Guide</Link>
        <Link to="/contact" className="font-medium hover:text-primary">contact</Link>
        <Link to="/faq" className="font-medium hover:text-primary">FAQ</Link>
        <Link to="/applied" className="font-medium hover:text-primary">Applied Files</Link>
      </div>
      <div className="hidden lg:flex flex-1 justify-end">
        <button className="flex gap-2 items-center border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-600">
          <img className="object-cover max-w-12 max-h-10" src={Icon} alt="Coder" />
          <span className="font-display font-medium">Coders</span>
          <FaArrowRight />
        </button>
      </div>

      <button className="p-2 lg:hidden" onClick={handleMenu}>
        <FaBars className="text-gray-600" />
      </button>

      {isMenuOpen && linksVisible && (
        <div id="nav-dialog" className="fixed z-10 lg:hidden bg-white inset-0 p-3">
          <div id="nav-bar" className="flex justify-between">
            <Link to="#" id="brand" className="flex gap-2 items-center">
              <img className="object-cover max-w-12 max-h-12" src={logo} alt="Logo" />
              <span className="text-lg font-medium font-display">EasyStudent</span>
            </Link>
            <button className="p-2 lg:hidden" onClick={handleMenu}>
              <FaTimes className="text-gray-600" />
            </button>
          </div>
          <div className="mt-6">
            <Link to="/" className="font-medium text-xl hover:text-blue-600 block hover:bg-slate-400 rounded-lg p-3 hover:shadow-4xl" onClick={handleClick}>home</Link>
            <Link to="/contest" className="font-medium text-xl hover:text-blue-600 block hover:bg-slate-400 rounded-lg p-3 hover:shadow-4xl" onClick={handleClick}>contest</Link>
            <Link to="/internship" className="font-medium text-xl hover:text-blue-600 block hover:bg-slate-400 rounded-lg p-3 hover:shadow-4xl" onClick={handleClick}>internship</Link>
            <Link to="/preparation" className="font-medium text-xl hover:text-blue-600 block hover:bg-slate-400 hover:shadow-4xl rounded-lg p-3" onClick={handleClick}>Prep_Guide</Link>
            <Link to="/contact" className="font-medium text-xl hover:text-blue-600 block hover:bg-slate-400 rounded-lg p-3 hover:shadow-4xl hover:shadow-teal-400" onClick={handleClick}>Contact Us</Link>
            <Link to="/faq" className="font-medium text-xl hover:text-blue-600 block hover:bg-slate-400 rounded-lg p-3 hover:shadow-4xl" onClick={handleClick}>FAQ</Link>
            <Link to="/applied" className="font-medium text-xl hover:text-blue-600 block hover:bg-slate-400 rounded-lg p-3 hover:shadow-4xl" onClick={handleClick}>applied</Link>
            
          </div>
          <div className="h-[1px] bg-gray-300"></div>
          <button className="mt-6 w-full flex gap-2 items-center px-6 py-4 rounded-lg hover:bg-gray-50">
            <img className="object-cover max-w-12 max-h-12" src={Icon} alt="Coder" />
            <span>Coders</span>
          </button>
          <p className='bottom-0 text-center'>all right reserved@ by coder</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
