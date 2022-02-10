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

    // clear the previous content
    display_food.textContent=''
    for (const food of foods) {
        console.log(food)
        const div=document.createElement('div')

        div.innerHTML=`

        <div class="col">
        <div onclick="foodId(${food.idMeal})" class="card">
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

const foodId=id=>{

  const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`

  fetch(url)
  .then(res=>res.json())
  .then(data=>foodDetail(data.meals[0]))
 
}

const foodDetail=details=>{

  console.log(details)
  const foodDetail=document.getElementById('food-detail')
  foodDetail.textContent=''
  const div=document.createElement('div')
  div.innerHTML=`
      <div class="card" style="width: 18rem;">
      <img src="${details.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${details.strMeal}</h5>
        <p class="card-text">${details.strInstructions.slice(0,100)}</p>
        <a href="${details.strYoutube}" class="btn btn-primary">watch video</a>
      </div>
    </div>
  `
  foodDetail.appendChild(div)
  
}