// Basic Ajax Projects..Practice

const content = document.querySelector('.content');

const btn = document.querySelector('.btn');

const img = document.querySelector('.container img');
const URL = 'https://api.chucknorris.io/jokes/random';


btn.addEventListener('click', () => {
    displayJoke(URL)
})



function displayJoke(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) return;
        if (xhr.status === 200) {
            const Joke = xhr.responseText;
            const ParseJoke = JSON.parse(Joke);
            content.innerHTML = ParseJoke.value;
            img.classList.add('shake-img');

            const RandomTime = Math.random() * 1000

            setTimeout(() => {
                img.classList.remove('shake-img')
            }, RandomTime);
        }
        else{
            console.log({
                status: xhr.status,
                Txt: xhr.statusText
            });
        }
    }
    xhr.send();
}