import React, { useState } from 'react';
import { categories, initialRecipes } from '../data/recipesData'; 
import RecipeCard from '../components/RecipeCard';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredRecipes = activeCategory === 'all'
    ? initialRecipes
    : initialRecipes.filter(recipe => recipe.categories.includes(activeCategory));

  return (
    <div className="max-w-6xl mx-auto my-8 px-4">
      {/* Dynamic Header Vibe */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-serif text-[#fdf6e2] mb-2">Recipe Gallery</h2>
        <div className="h-1 w-20 bg-[#fdf6e2]/40 mx-auto rounded"></div>
      </div>

      {/* Categories Buttons Row */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-5 py-2 rounded-full text-sm font-semibold tracking-wide border transition-all duration-200 ${
              activeCategory === category.id
                ? 'bg-[#fdf6e2] text-[#4a2c11] border-[#fdf6e2] scale-105 shadow-md'
                : 'bg-transparent text-[#fdf6e2] border-[#fdf6e2]/30 hover:border-[#fdf6e2]'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Recipe Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {/* Fallback Display */}
      {filteredRecipes.length === 0 && (
        <p className="text-center text-[#fdf6e2]/50 italic mt-8">
          No items found matching this category.
        </p>
      )}
    </div>
  );
}