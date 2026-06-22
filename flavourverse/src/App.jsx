import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#4a2c11] min-h-screen font-sans pb-12 select-none">
        
        {/* Top Navbar Configuration */}
        <nav className="bg-[#361e0a] py-6 px-4 text-center border-b border-[#fdf6e2]/10 shadow-md">
          <Link to="/" className="text-3xl font-serif tracking-widest text-[#fdf6e2] hover:opacity-90 transition-opacity">
            FRESHCoob
          </Link>
        </nav>

        {/* Multi-Page Route Handlers */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}