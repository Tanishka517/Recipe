import React, { useState } from 'react';

export const categories = [
  { id: 'all', label: 'All Recipes' },
  { id: 'veg', label: 'Veg' },
  { id: 'non-veg', label: 'Non-Veg' },
  { id: 'spicy', label: 'Spicy' },
  { id: 'sweet', label: 'Sweet' },
  { id: 'comforting', label: 'Comforting / Light' }
];

export const initialRecipes = [
  {
    id: 1,
    title: "Dabeli Bruschetta",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjWu-FTvDyv9kdrVIkzsa5hTW183hxWj5n3co8hS5qrE3GYDCAwuFTtI&s=10",
    categories: ['veg', 'spicy', 'comforting']
  },
  {
    id: 2,
    title: "Thandai Boba Milkshake",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=500",
    categories: ['veg', 'sweet', 'comforting']
  },
  {
    id: 3,
    title: "Pav Bhaji Focaccia",
    image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=500",
    categories: ['veg', 'spicy', 'comforting']
  },
  {
    id: 4,
    title: "Instant Pot Vegetable Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=500",
    categories: ['veg', 'spicy']
  },
  {
    id: 5,
    title: "High Protein Chicken Tikka Skewers",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=500",
    categories: ['non-veg', 'spicy']
  },
  {
    id: 6,
    title: "Tofu Tikka Kebabs",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=500",
    categories: ['veg', 'spicy', 'light']
  },
  {
    id: 7,
    title: "Baked Samosa Puffs",
    image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=500",
    categories: ['veg', 'comforting']
  },
  {
    id: 8,
    title: "Spicy Paneer Makhani",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=500",
    categories: ['veg', 'spicy', 'comforting']
  },
  {
    id: 9,
    title: "Instant Rose Peda",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=500",
    categories: ['veg', 'sweet']
  },
  {
    id: 10,
    title: "Light Palak Tofu Soup",
    image: "https://images.unsplash.com/photo-1547592165-e1d17fed6005?auto=format&fit=crop&q=80&w=500",
    categories: ['veg', 'light']
  },
  {
    id: 11,
    title: "Lean Grilled Salmon with Greens",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=500",
    categories: ['non-veg', 'light']
  },
  {
    id: 12,
    title: "Asian Peanut & Celery Salad",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500",
    categories: ['veg', 'light']
  },
  {
    id: 13,
    title: "Cupcake Handvo (Savory Cake)",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=500",
    categories: ['veg', 'light']
  },
  {
    id: 14,
    title: "Kesar Shrikhand Dessert",
    image: "https://images.unsplash.com/photo-1571244856051-93ef64eb9875?auto=format&fit=crop&q=80&w=500",
    categories: ['veg', 'sweet']
  },
  {
    id: 15,
    title: "Crispy Chocolate Walnut Fudge",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=500",
    categories: ['veg', 'sweet', 'comforting']
  },
  {
    id: 16,
    title: "Spicy Andhra Chilli Egg Curry",
    image: "https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&q=80&w=500",
    categories: ['non-veg', 'spicy']
  },
  {
    id: 17,
    title: "Methi Mutter Malai",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=500",
    categories: ['veg', 'comforting']
  },
  {
    id: 18,
    title: "Brown Rice Sprouts Pulao",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=500",
    categories: ['veg', 'light']
  },
  {
    id: 19,
    title: "Spicy Garlic Butter Shrimp",
    image: "https://images.unsplash.com/photo-1551248429-4043baf06b88?auto=format&fit=crop&q=80&w=500",
    categories: ['non-veg', 'spicy', 'light']
  },
  {
    id: 20,
    title: "Air Fryer Noodles",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=500",
    categories: ['veg', 'comforting']
  },
  {
    id: 21,
    title: "Khaman Dhokla",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=500",
    categories: ['veg', 'light']
  },
  {
    id: 22,
    title: "Chilli Paneer Franky Wrap",
    image: "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&q=80&w=500",
    categories: ['veg', 'spicy', 'comforting']
  },
  {
    id: 23,
    title: "Blueberry Rice Kheer",
    image: "https://images.unsplash.com/photo-1517686469429-8faf88b9f7af?auto=format&fit=crop&q=80&w=500",
    categories: ['veg', 'sweet']
  },
  {
    id: 24,
    title: "Creamy Bhune Bhutte ka Shorba",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=500",
    categories: ['veg', 'light', 'comforting']
  },
  {
    id: 25,
    title: "High-Protein Turkey Lettuce Wraps",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500",
    categories: ['non-veg', 'light']
  },
  {
    id: 26,
    title: "Kutchi Dabeli Slider",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=500",
    categories: ['veg', 'spicy', 'comforting']
  },
  {
    id: 27,
    title: "Pineapple Zarda Sweet Rice",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=500",
    categories: ['veg', 'sweet']
  },
  {
    id: 28,
    title: "Loaded Veggie Curly Fries Nachos",
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&q=80&w=500",
    categories: ['veg', 'comforting']
  },
  {
    id: 29,
    title: "Garlic Butter Grilled Chicken Breast",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=500",
    categories: ['non-veg', 'comforting']
  },
  {
    id: 30,
    title: "Oats and Dry Fruit Chikki",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=500",
    categories: ['veg', 'sweet', 'light']
  }
];