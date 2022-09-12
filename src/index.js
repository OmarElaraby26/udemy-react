import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/index.css';

import Home from './pages/Home';
import Course from './pages/Course';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/course/:id" element={<Course />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

