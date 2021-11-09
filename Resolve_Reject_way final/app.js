// Basic Ajax Projects..Practice

const content = document.querySelector('.content');

const btn = document.querySelector('.btn');

const img = document.querySelector('.container img');
const URL = 'https://api.chucknorris.io/jokes/random';


btn.addEventListener('click', () => {
    displayJoke(URL).then((data) => {
       displayjokeTxt(data)
    }).catch(err=>console.log(err))
})



function displayJoke(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return;
            if (xhr.status === 200) {
                const parseTxt = JSON.parse(xhr.responseText)
                resolve(parseTxt)
            }
            else{
               reject({
                   status: xhr.status,
                   txt: xhr.responseText
               })
            }
        }

        xhr.send();
    })
}



function displayjokeTxt(data){
content.innerHTML = data.value;
img.classList.add('shake-img');

const RandomTime = Math.random()*1000

setTimeout(() => {
    img.classList.remove('shake-img')
}, RandomTime);
}