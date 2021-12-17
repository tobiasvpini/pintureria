export default function changeMainImg(e){
    let srcBox = document.querySelector("#main-article").firstElementChild.src;
    let textBox = document.querySelector("#main-article").firstElementChild.nextElementSibling.textContent;

    document.querySelector("#main-article").firstElementChild.src = e.target.src;
    document.querySelector("#main-article").firstElementChild.nextElementSibling.textContent = e.target.nextElementSibling.textContent;
    e.target.src = srcBox;
    e.target.nextElementSibling.textContent = textBox;

}