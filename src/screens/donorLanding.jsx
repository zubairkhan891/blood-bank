import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="relative h-screen bg-black">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="./assets/blood-donation.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Overlaying Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl mb-6">
          Donate Blood, Save Lives
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Join us today and become a life-saver by donating blood to those in need.
        </p>
        <Link
          to="/donorDeta"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Become a Donor
        </Link>
      </div>
    </div>

    // <div className="bg-white text-gray-800 ">

    //   {/* Hero Section */}
    //   <section className="bg-red-600 text-white h-screen flex flex-col justify-center items-center text-center">
    //     <h1 className="text-4xl md:text-6xl font-bold mb-4">SMIT Blood Bank Health Care</h1>
    //     <p className="text-xl mb-6">Donate Blood, Save Lives. Join our mission to make a difference today.</p>
    //     <Link
    //       to="/donorDeta"
    //       className="bg-white text-red-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100"
    //     >
    //       Become a Donor
    //     </Link>
    //   </section>
    // </div>
  );
};

export default LandingPage;
