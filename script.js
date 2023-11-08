//Loading the Random image and Name
function loadRandomImage(){
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const randomMeal = data.meals[0];
            if (randomMeal) {
                const imageUrl = randomMeal.strMealThumb;
                const imageElement = document.createElement('img');
                imageElement.src = imageUrl;
                const imageContainer = document.getElementById('randommeal-Container');
                imageContainer.innerHTML = '';
                imageContainer.appendChild(imageElement);

                const mealNameElement = document.getElementById('meal-name');
                mealNameElement.textContent = randomMeal.strMeal;

                ShowcaseIngredients(randomMeal);
            }
        })
        .catch(error => {
            console.error('Error loading random image:', error);
        });
}
// Load a random image when the page initially loads
loadRandomImage();




//Ingredients showcase
function ShowcaseIngredients(randomMeal) {
    const ingredients = [];
    const measurements = [];

    for (let i = 1; i <= 20; i++) {
        const ingredient = randomMeal['strIngredient' + i];
        const measurement = randomMeal['strMeasure' + i];
        if (ingredient && measurement) {
            ingredients.push(ingredient);
            measurements.push(measurement);
        }
    }

    const ingredientsList = document.getElementById('ingredients-list');
    ingredientsList.innerHTML = '';

    for (let i = 0; i < ingredients.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `${measurements[i]} ${ingredients[i]}`;
        ingredientsList.appendChild(listItem);
    }
    console.log(measurements , ingredients)
}
// Add a click event listener to the #randommeal-Container
document.getElementById('randommeal-Container').addEventListener('click', Showingredients);

function Showingredients(){
    document.getElementById("box").style.display = "block";
}

const info=document.getElementById("meal-name")
info.addEventListener("click",()=>{
   Showingredients()
});

const close = document.querySelector("#close")
close.addEventListener("click",()=>{
    document.getElementById("box").style.display = "none";
});






















const searchInput = document.getElementById('input');
const searchResults = document.getElementById('search-results');




//function for searching the meals
function getMeals(){
//refined with a little use of chat gpt
document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-button");
    // const mealList = document.getElementById("mealList");

    searchButton.addEventListener("click", function () {
        const categoryName = searchInput.value;
        searchInput.value= '';

        // Make an API request to fetch meals by category
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
            .then(response => response.json())
            .then(data => {
                searchResults.innerHTML = ""; // Clear previous results

                const topic2 = document.getElementById("topic2");
                topic2.innerHTML = "";
                const mealCategory = document.createElement("p");
                mealCategory.innerHTML= `Searched Results for Category: ${categoryName}`;
                topic2.appendChild(mealCategory);

                if (data.meals) {
                    data.meals.forEach(meal => {
                        const mealDiv = document.createElement("div");
                        mealDiv.className ="mealDiv"

                        const mealImage = document.createElement("img");
                        mealImage.src = meal.strMealThumb;

                        const mealName = document.createElement("p");
                        mealName.textContent = meal.strMeal;
    
                        mealDiv.appendChild(mealImage);
                        mealDiv.appendChild(mealName);
                        searchResults.appendChild(mealDiv);
                    });
                } else {
                    searchResults.textContent = "No meals found for this category.";
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    });
});
}
getMeals();




(function scroll(){
    // document.addEventListener("DOMContentLoaded", function() {
    //     // Find the button element by its id
        var searchbutton = document.getElementById("search-button");
    
        // Find the target element by its id
        var scrollTarget = document.getElementById("topic2");
    
        // Add a click event listener to the button
        searchbutton.addEventListener("click", function() {
            // Scroll to the target element when the button is clicked
            scrollTarget.scrollIntoView({ behavior: "smooth" });
        });
})();



































































// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
// .then(res => console.log(res))

// fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
// .then(data=> console.log(data))