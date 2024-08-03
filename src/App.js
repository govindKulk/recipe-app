import React, { useState } from 'react';
import RecipeList from './RecipeList.js';
import RecipeDetail from './RecipeDetail';
import recipes from './recipes.json';
import './App.css';

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="app">
      <div className="sidebar">
        <RecipeList recipes={recipes} onSelect={setSelectedRecipe} />
      </div>
      <div className="main-content">
        <RecipeDetail recipe={selectedRecipe} />
      </div>
    </div>
  );
};

export default App;
