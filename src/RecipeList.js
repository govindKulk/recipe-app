import React from 'react';

const RecipeList = ({ recipes, onSelect }) => {
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe.id} onClick={() => onSelect(recipe)}>
          {recipe.name}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
