import React from "react"

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4">

      <h1 className="text-2xl font-bold text-orange-500">
        FlavorVerse
      </h1>

      <ul className="flex gap-8 text-white">

        <li>Home</li>
        <li>Categories</li>
        <li>Recipes</li>
        <li>About</li>

      </ul>

      <button
      className="bg-orange-500 px-5 py-2 rounded-full">
        Explore
      </button>

    </nav>
  )
}

export default Navbar