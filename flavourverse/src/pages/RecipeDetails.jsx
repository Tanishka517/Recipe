import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { initialRecipes } from '../data/recipesData';

export default function RecipeDetails() {
  const { id } = useParams();
  const recipe = initialRecipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="text-center text-[#fdf6e2] py-20">
        <h2 className="text-2xl">Recipe not found!</h2>
        <Link to="/" className="text-sm underline text-[#fdf6e2]/70 mt-4 inline-block">
          Return to Gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto my-12 px-4 text-[#fdf6e2]">
      <Link to="/" className="text-sm bg-[#361e0a] border border-[#fdf6e2]/10 px-4 py-2 rounded-md hover:underline inline-block mb-6">
        ← Back to Gallery
      </Link>
      
      <div className="bg-[#361e0a] rounded-2xl overflow-hidden shadow-2xl border border-[#fdf6e2]/10">
        <div className="h-80 overflow-hidden">
          <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
        </div>
        
        <div className="p-8">
          <h1 className="text-4xl font-serif mb-4">{recipe.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {recipe.categories.map((cat) => (
              <span key={cat} className="bg-[#fdf6e2] text-[#4a2c11] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {cat}
              </span>
            ))}
          </div>
          
          <hr className="border-[#fdf6e2]/10 my-6" />
          <h3 className="text-xl font-serif mb-2 text-[#fdf6e2]">Preparation Method</h3>
          <p className="text-gray-300 leading-relaxed">
            This page represents the complete full-view design configuration for your individual culinary pages. You can add unique descriptions, instructions, or precise ingredient metrics to each item configuration in your core schema!
          </p>
        </div>
      </div>
    </div>
  );
}