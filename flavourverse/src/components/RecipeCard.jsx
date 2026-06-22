import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeCard({ recipe }) {
  return (
    <Link 
      to={`/recipe/${recipe.id}`}
      className="bg-[#361e0a] rounded-xl overflow-hidden shadow-xl border border-[#fdf6e2]/5 group hover:scale-[1.02] transition-transform duration-200 block"
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="bg-[#fdf6e2] text-[#4a2c11] p-4 text-center">
        <h3 className="font-serif font-bold text-base leading-tight min-h-[44px] flex items-center justify-center">
          {recipe.title}
        </h3>
        <p className="text-xs font-semibold text-amber-800 mt-2 tracking-wider group-hover:underline">
          View Recipe →
        </p>
      </div>
    </Link>
  );
}