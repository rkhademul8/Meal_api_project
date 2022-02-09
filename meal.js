const searchFood=()=>{
    
    const searchFood=document.getElementById('search-food')
    const searchFoodText=searchFood.value
    searchFood.value=''
    
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFoodText}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayFood(data.meals))
}

const displayFood=foods=>{

    const display_food=document.getElementById('display-food')
    for (const food of foods) {
        console.log(food)
        const div=document.createElement('div')

        div.innerHTML=`

        <div class="col">
        <div class="card">
          <img src="${food.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${food.strMeal}</h5>
            <p class="card-text">${food.strInstructions.slice(0,250)}</p>
          </div>
        </div>
      </div>
        `
        display_food.appendChild(div)
    }
    
}