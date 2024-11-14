import React, { StrictMode } from 'react';  // Correct import of React and StrictMode
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import Blogs from './components/Blogs.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import './index.css';
import Layout from './Layout/Layout.jsx';
import News from './components/News.jsx';
import Login from './components/Login.jsx';

import Register from './components/Register.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register/>}></Route>
      <Route path="home" element={<ProtectedRoute element={<Home />} />} />
      <Route path="about" element={<ProtectedRoute element={<About />} />} />
      <Route path="contact" element={<ProtectedRoute element={<Contact />} />} />
      <Route path="blogs" element={<ProtectedRoute element={<Blogs />} />} />
      <Route path="services" element={<ProtectedRoute element={<Services />} />} />
      <Route path="news" element={<ProtectedRoute element={<News />} />} />
      
      
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
