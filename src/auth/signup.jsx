import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';


function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleSignup(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (response) => {
        const uid = response.user.uid
        const userData = { name, email, uid }
        localStorage.setItem("userId", response.user.uid)
        await setDoc(doc(db, 'users', uid), userData)
        console.log("User Succesfuly Registerd!");
        Swal.fire({
          title: 'User  Succesfuly Registerd!',
          icon: 'success',
        })
        navigate('/Login')
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          title: 'Something Went Wrong!',
          text: error.message,
          icon: 'error',
        })
      })
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-red-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Sign up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Full name</label>
            <input
              type="text"
              placeholder='name'
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder='name@gmail.com'
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder='. .  .  .  .'
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
            <div className='pt-4'>
              already have an account? <Link to="/Login" className='text-red-700 font-semibold underline'>Login</Link>
            </div>
          </div>

          <button
            onClick={handleSignup}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:bg-red-600"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};


export default Signup