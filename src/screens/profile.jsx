import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Navbar from './navbar';
import Footer from './footer';

const Profile = () => {
  const [donors, setDonors] = useState([]);

  // Fetch donors from Firestore
  useEffect(() => {
    const fetchDonors = async () => {
      const donorsCollection = await getDocs(collection(db, 'donors'));
      setDonors(donorsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchDonors();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 my-10 ">
        <h1 className="text-3xl font-bold mb-6">Blood Donors</h1>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {donors.map(donor => (
            <div key={donor.id} className="mt-4 border-b p-4 flex items-center space-x-4 hover:bg-gray-100 cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-lg font-bold">
                {donor.name.charAt(0)}
              </div>
              <div className="flex-grow">
                <h2 className="text-lg font-bold text-black">{donor.name}</h2>
                <p className="font-semibold text-gray-600">{donor.bloodGroup} | {donor.city}</p>
              </div>
              <div className="text-md text-gray-600">
                <p>Age: {donor.age}</p>
                <a href="https://wa.me/" target='_blank'>{donor.contact}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
