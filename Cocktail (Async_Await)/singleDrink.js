import fetchDrink from "./src/fetchDrinks.js";
import displayDrink from "./src/displaySingleDrink.js";
import { hideLoading } from "./src/toggleLoading.js";


const presentDrinks = async ()=>{
    const id = localStorage.getItem('drink');
    if(!id){
        window.location.replace('index.html')
    }
    else{
        const items = await fetchDrink(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        displayDrink(items);
        hideLoading()
    }
 
}

window.addEventListener('DOMContentLoaded', presentDrinks);