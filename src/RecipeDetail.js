import React from 'react';

const RecipeDetail = ({ recipe }) => {
  if (!recipe) return <div>Select a recipe to see the details</div>;

  return (
    <div className="recipe-detail">
      <h2>{recipe.name}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Process:</h3>
      <p>{recipe.process}</p>
      <h3>Country of Origin:</h3>
      <p>{recipe.country}</p>
      <h3>Category:</h3>
      <p>{recipe.category}</p>
    </div>
  );
};

export default RecipeDetail;
