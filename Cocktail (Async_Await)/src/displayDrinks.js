import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';

const displayDrink = ({ drinks }) => {

    const section = get('.section-center');
    const title = get('.title');
    const loading = get('.loading')
    if (!drinks) {
        //hide loading...
        hideLoading();
        title.textContent = `Sorry, no drinks matched your search`;
        section.innerHTML = null;
        return;
    }

    const newDrinks = drinks.map((drink) => {
        return `<a href="drink.html">
<article class="cocktail" data-id="${drink.idDrink}">
  <img src="${drink.strDrinkThumb}" alt="cocktail-img">
  <h3>${drink.strDrink}</h3>
</article>
</a>
`
    }).join('');
    //hide loading
    hideLoading();
    title.textContent = '';
    section.innerHTML = newDrinks;
    return section;
}


export default displayDrink;