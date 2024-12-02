import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DonorRegistrationForm from "./auth/donorDeta";
import DonorProfile from "./screens/profile";
import About from "./screens/about";
import Collaborations from "./screens/collaborat";
import Footer from "./screens/footer";
import Navbar from "./screens/navbar";
import LandingPage from "./screens/donorLanding";
import Dashboard from "./screens/dashboard";
import Login from "./auth/Login";
import Signup from "./auth/signup";
import "./index.css"


export default function App() {

  const router = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/signup', element: <Signup /> },
    { path: '/Login', element: <Login /> },
    { path: '/donorLanding', element: <LandingPage /> },
    { path: '/about', element: <About /> },
    { path: '/donorDeta', element: <DonorRegistrationForm /> },
    { path: '/profile', element: <DonorProfile /> },
    { path: '/navbar', element: <Navbar /> },
    { path: '/collaborat', element: <Collaborations /> },
    { path: '/footer', element: <Footer /> },
    { path: '/dashboard', element: <Dashboard /> },

  ]);

  return <RouterProvider router={router} />
}