import get from './getElement.js';
import presentDrink from './presentDrinks.js';


const baseUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`

const form = get('.search-form');
const input = get('[name="drink"]');

form.addEventListener('keyup', (e) => {
    e.preventDefault();
   const value = input.value;
   if(!value) {
       presentDrink(`${baseUrl}a`);
       return;
   };
   presentDrink(`${baseUrl}${value}`)
})