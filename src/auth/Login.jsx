import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

export default function Login() {

  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, pswd)
      console.log("User logged in successfully!");
      Swal.fire({
        title: 'User  Succesfuly Login!',
        icon: 'success',
      })
      navigate('/profile')

    } catch (error) {
      console.log(error.message);
      Swal.fire({
        title: 'Something Went Wrong!',
        text: error.message,
        icon: 'error',
      })
    }

  };
  return (

    <div className="min-h-screen flex items-center justify-center bg-red-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-black text-center">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-black mb-2">Email</label>
          <input
            type="email"
            placeholder='name@gmail.com'
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-black mb-2">Password</label>
          <input
            type="password"
            placeholder='. . . . . . .'
            onChange={(e) => setPswd(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <div className='flex justify-between items-center text-red-700 pt-4'>
            <Link to="/signup" className="font-semibold underline">Sign up</Link>
            <p>Forgot Password?</p>
          </div>
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:bg-red-600"
        >
          Login
        </button>
      </div>
    </div>
  )
}
