import React from "react";
import Navbar from "./navbar";
import LandingPage from "./donorLanding";
import Footer from "./footer";

const Collaborations = () => {
  const services = [
    {
      name: "Aga Khan Hospital Karachi",
      description: "Leading provider of blood donation services.",
      imgSrc: "./assets/aga-khan-hospital.webp",
    },
    {
      name: "Ziauddin Hospital Karachi",
      description: "Partnering with blood banks for emergencies.",
      imgSrc: "./assets/ziauddin-hospital.jpg",
    },
    {
      name: "Dow Hospital Karachi",
      description: "Supporting blood donations across the region.",
      imgSrc: "./assets/dow-hospital.jpg",
    },
    {
      name: "Civil Hospital Karachi",
      description: "24/7 blood transfusion services.",
      imgSrc: "./assets/civil-hospital.jpg",
    },
    {
      name: "Jinnah Hospital Karachi",
      description: "24/7 blood transfusion services.",
      imgSrc: "./assets/jinnah-hospital.jpg",
    },
    {
      name: "Liaquat National Hospital",
      description: "24/7 blood transfusion services.",
      imgSrc: "./assets/lums-hospital.jpeg",
    },
  ];

  return (
    <>
      <Navbar />
      <LandingPage />
      <div className="bg-gray-100 min-h-screen py-10 mb-12 px-6">
        <h1 className="text-4xl font-bold text-center mb-10">Health Service Partners</h1>

        {/* Card Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={service.imgSrc}
                alt={service.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{service.name}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
              <div className="absolute inset-0 bg-red-600 bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>

  );
};

export default Collaborations;
