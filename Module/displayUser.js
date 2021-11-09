import get from "./getElement.js";
import RemoveClass from "./RemoveClass.js";




const img = get('.user-img');
const htmltitle = get('.user-title');
const uservalue = get('.user-value');

const icons = [...document.querySelectorAll('.icon')];



const diplayUser = (person) => {
    img.src = person.image;
    htmltitle.textContent = `My name is`;
    uservalue.textContent = `${person.name}`;
    RemoveClass(icons);
    icons[0].classList.add('active')

    icons.forEach((icon) => {

        icon.addEventListener('click', () => {
            const label = icon.dataset.label;

            htmltitle.textContent = `My ${label} is`;
            uservalue.textContent = `${person[label]}`;
            RemoveClass(icons)
            icon.classList.add('active')
        })
    })
}





export default diplayUser;