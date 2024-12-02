import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Swal from 'sweetalert2';
import Navbar from '../screens/navbar';
import Footer from '../screens/footer';
import { useNavigate } from 'react-router-dom';

const DonorRegistrationForm = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    bloodGroup: '',
    contact: '',
    city: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'donors'), formData);
      console.log('Donor Registered Successfully!');
      Swal.fire({
        title: 'User  Succesfully Registered!',
        icon: 'success',
      })
      navigate('/dashboard')
    } catch (error) {
      console.error("Error registering donor:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20 p-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">SMIT Blood Bank Health Care</h1>
          <p className="text-xl mb-6">Donate Blood, Save Lives. Join our mission to make a difference today.</p>
        </div>
        <h1 className="text-2xl font-bold mb-4">Donor Registration</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded w-full"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="text"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            placeholder="Blood Group (A+, O-, etc.)"
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Contact Number"
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
          <button type="submit" className="bg-red-500 text-white p-2 rounded">Register</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default DonorRegistrationForm;
