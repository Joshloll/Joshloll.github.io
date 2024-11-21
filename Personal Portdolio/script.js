const mealAPI = 'https://www.themealdb.com/api/json/v1/1/random.php';

async function getRandomMeal() {
  try {
    const response = await fetch(mealAPI);
    const data = await response.json();
    const meal = data.meals[0];

    // Display meal details
    document.getElementById('mealName').innerText = meal.strMeal;
    document.getElementById('mealCategory').innerText = meal.strCategory;
    document.getElementById('mealInstructions').innerText = meal.strInstructions;
    document.getElementById('mealImage').src = meal.strMealThumb;
  } catch (error) {
    console.error('Error fetching meal data:', error);
  }
}

// Call the function to fetch and display meal data when the page loads
window.onload = getRandomMeal;
