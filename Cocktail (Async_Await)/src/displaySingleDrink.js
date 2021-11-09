import get from './getElement.js';

const singleCocktailImg = get('.drink-img');
const title = get('.drink-name');

const descs = get('.drink-desc');
const lists = get('.drink-ingredient')

const displayDrink = ({ drinks }) => {
    console.log(drinks);
    const data = drinks[0]
    const { strDrink: name, strDrinkThumb: img, strInstructions: desc } = data;
    const list = [data.strIngredient1, data.strIngredient2, data.strIngredient3, data.strIngredient4, data.strIngredient5]

    singleCocktailImg.src = img;
    title.textContent = `name: ${name}`;
    descs.innerHTML = `<strong>Instructions:</strong> ${desc}`;

    lists.innerHTML = list.map((item) => {
        if (item) {
            return `<li><i class="far fa-check-square"></i>${item}</li>`
        }
        else {
            return '';
        }
    }).join('');

}

export default displayDrink;