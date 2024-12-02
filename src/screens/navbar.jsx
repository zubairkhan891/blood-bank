import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg p-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 ">
          <div className="flex-shrink-0 flex items-center  text-black">
            <Link to="/" className=" text-2xl font-bold">
              Blood Bank
            </Link>
          </div>
          <div className="hidden md:flex md:space-x-6 items-center">
            <Link to="/dashboard" className=" hover:bg-red-600 px-3 py-2 text-lg rounded-full  hover:text-white font-medium">
              Home
            </Link>
            <Link to="/about" className=" hover:bg-red-600 px-3 py-2 rounded-full  hover:text-white text-lg font-medium">
              About
            </Link>
            <Link to="/donorDeta" className=" hover:bg-red-600 px-3 py-2 rounded-full  hover:text-white text-lg font-medium">
              Donor Rigistration
            </Link>
            <Link to="/collaborat" className=" hover:bg-red-600 px-3 py-2 rounded-full  hover:text-white text-lg font-medium">
              Collaborations
            </Link>
            <Link to="/profile" className=" hover:bg-red-600 px-3 py-2 rounded-full  hover:text-white text-lg font-medium">
              Profile
            </Link>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-red-600 inline-flex items-center justify-center p-2 rounded-full text-white hover:text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/dashboard" className="text-black hover:bg-red-600 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="text-black hover:bg-red-600 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link to="/donorDeta" className="text-black hover:bg-red-600 block px-3 py-2 rounded-md text-base font-medium">
              Donor Registration
            </Link>
            <Link to="/collaborat" className="text-black hover:bg-red-600 block px-3 py-2 rounded-md text-base font-medium">
              Collaborations
            </Link>
            <Link to="/profile" className="text-black hover:bg-red-600 block px-3 py-2 rounded-md text-base font-medium">
              Donors
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
