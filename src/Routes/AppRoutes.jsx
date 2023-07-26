import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>} />
      <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>} />
    </Routes>
  )
}

export default AppRoutes