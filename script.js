const recipes = [
  {
    name: "Chicken Fried Rice",
    cuisine: "Asian",
    ingredients: ["chicken", "rice", "egg", "soy sauce", "peas"],
    instructions: "Cook rice, scramble eggs, add chicken and vegetables, then mix with soy sauce."
  },
  {
    name: "Cheese Quesadilla",
    cuisine: "Mexican",
    ingredients: ["tortilla", "cheese", "chicken"],
    instructions: "Place cheese and chicken inside a tortilla and cook until crispy."
  },
  {
    name: "Spaghetti Marinara",
    cuisine: "Italian",
    ingredients: ["pasta", "tomato sauce", "garlic"],
    instructions: "Boil pasta and mix with warm tomato sauce and garlic."
  },
  {
    name: "Breakfast Omelet",
    cuisine: "American",
    ingredients: ["egg", "cheese", "ham", "pepper"],
    instructions: "Beat eggs, add fillings, and cook in a pan until firm."
  },
  {
    name: "Chicken Tacos",
    cuisine: "Mexican",
    ingredients: ["chicken", "tortilla", "lettuce", "cheese"],
    instructions: "Fill tortillas with cooked chicken, lettuce, and cheese."
  },
  {
    name: "Rice Bowl",
    cuisine: "Korean Inspired",
    ingredients: ["rice", "egg", "carrot", "beef", "soy sauce"],
    instructions: "Layer rice, vegetables, egg, and beef in a bowl with soy sauce."
  },
  {
    name: "Grilled Cheese",
    cuisine: "American",
    ingredients: ["bread", "cheese", "butter"],
    instructions: "Butter bread, add cheese, and grill until golden brown."
  },
  {
    name: "Chicken Noodle Soup",
    cuisine: "American",
    ingredients: ["chicken", "noodles", "carrot", "celery"],
    instructions: "Simmer chicken, noodles, and vegetables in broth."
  },
  {
    name: "Veggie Pasta",
    cuisine: "Italian",
    ingredients: ["pasta", "zucchini", "tomato", "garlic"],
    instructions: "Cook pasta and mix with sautéed vegetables."
  },
  {
    name: "Bean Burrito",
    cuisine: "Mexican",
    ingredients: ["tortilla", "beans", "cheese", "rice"],
    instructions: "Fill a tortilla with beans, rice, and cheese, then roll it up."
  },
  {
    name: "French Toast",
    cuisine: "French Inspired",
    ingredients: ["bread", "egg", "milk", "cinnamon"],
    instructions: "Dip bread in egg mixture and cook on both sides."
  },
  {
    name: "Chicken Salad",
    cuisine: "American",
    ingredients: ["chicken", "lettuce", "tomato", "ranch"],
    instructions: "Mix chicken, lettuce, tomato, and dressing in a bowl."
  },
  {
    name: "Beef Stir Fry",
    cuisine: "Chinese Inspired",
    ingredients: ["beef", "broccoli", "rice", "soy sauce"],
    instructions: "Cook beef and broccoli, then serve over rice."
  },
  {
    name: "Pizza Toast",
    cuisine: "Italian Inspired",
    ingredients: ["bread", "cheese", "tomato sauce", "pepperoni"],
    instructions: "Top bread with sauce, cheese, and pepperoni, then bake."
  },
  {
    name: "Pancakes",
    cuisine: "American",
    ingredients: ["flour", "egg", "milk", "sugar"],
    instructions: "Mix ingredients and cook batter on a hot pan."
  }
];

function displayRecipes(recipeList) {
  const results = document.getElementById("recipeResults");
  results.innerHTML = "";

  if (recipeList.length === 0) {
    results.innerHTML = "<p>No recipes found. Try another ingredient.</p>";
    return;
  }

  recipeList.forEach(recipe => {
    results.innerHTML += `
      <div class="recipe-card">
        <h3>${recipe.name}</h3>
        <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
        <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
        <p><strong>Instructions:</strong> ${recipe.instructions}</p>
      </div>
    `;
  });
}

function findRecipes() {
  const input = document.getElementById("ingredientInput").value.toLowerCase();
  const typedIngredients = input.split(",").map(item => item.trim());

  const matchedRecipes = recipes.filter(recipe =>
    typedIngredients.some(ingredient =>
      recipe.ingredients.includes(ingredient)
    )
  );

  displayRecipes(matchedRecipes);
}

function surpriseMe() {
  const animationBox = document.getElementById("animationBox");
  let count = 0;

  const shuffle = setInterval(() => {
    const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    animationBox.textContent = randomRecipe.name;
    count++;

    if (count > 12) {
      clearInterval(shuffle);
      const finalRecipe = recipes[Math.floor(Math.random() * recipes.length)];
      animationBox.textContent = "You got: " + finalRecipe.name + "!";
      displayRecipes([finalRecipe]);
    }
  }, 120);
}

displayRecipes(recipes);
