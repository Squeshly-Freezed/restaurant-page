import food1 from "./img/food1-webp.webp";

const content = document.querySelector(".content");

const food1Image = document.createElement("img");
food1Image.src = food1;

export default function display () {
    content.appendChild(food1Image);
}