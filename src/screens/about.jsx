import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import LandingPage from "./donorLanding";

// Helper function to calculate total donors since 2008
const getTotalDonors = (startYear = 2008) => {
  const currentYear = new Date().getFullYear();
  const donorsPerYear = 5000;
  return (currentYear - startYear + 1) * donorsPerYear;
};

const About = () => {
  const totalDonors = getTotalDonors();

  const services = [
    {
      name: "Blood Donation",
      description: "We provide blood donation services to hospitals, patients, and those in need across Pakistan.",
    },
    {
      name: "Emergency Blood Supply",
      description: "24/7 emergency blood supply available in case of urgent needs and natural disasters.",
    },
    {
      name: "Blood Donation Camps",
      description: "Organizing regular blood donation camps across the country for easy access to donation centers.",
    },
    {
      name: "Health Care Awareness",
      description: "Promoting healthcare awareness and the importance of blood donations throughout the year.",
    },
  ];

  const reviews = [
    { name: "Ahmed Ali", feedback: "A fantastic initiative helping thousands across the country." },
    { name: "Fatima Khan", feedback: "Their emergency services saved my relative’s life." },
    { name: "Zain Malik", feedback: "Reliable and well-organized blood donation camps!" },
  ];

  const reasons = [
    "Free of cost service across Pakistan.",
    "Trusted by over 100,000 donors and beneficiaries.",
    "24/7 emergency blood supply.",
    "Advanced technology for real-time blood tracking.",
  ];

  return (
    <>
      <Navbar />
      <LandingPage />
      <div className="bg-gray-100 py-10 mt-10 px-6">
        <h1 className="text-5xl font-bold text-center mb-10">SMIT Blood Bank Health Care</h1>
        <p className="text-center text-lg font-semibold text-gray-600 mb-8">
          Offering free-of-cost blood donation services across Pakistan.
        </p>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Total Donors Section */}
        <section className="mb-16 bg-red-600 text-white py-10 rounded-lg">
          <h2 className="text-4xl font-bold text-center mb-4">Total Donors Since 2008</h2>
          <p className="text-center text-3xl font-semibold">{totalDonors.toLocaleString()} Donors</p>
        </section>

        {/* Reviews Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8">What People Say About Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <p className="italic text-gray-600 mb-4">"{review.feedback}"</p>
                <p className="text-gray-900 font-semibold">- {review.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8">Why Choose Us</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 max-w-3xl mx-auto">
            {reasons.map((reason, index) => (
              <li key={index} className="mb-4">{reason}</li>
            ))}
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
