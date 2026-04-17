import food3 from "./img/food3-webp.webp";

const content = document.querySelector(".content");

const food3Image = document.createElement("img");
food3Image.src = food3;

export default function display () {
    content.appendChild(food3Image);
}