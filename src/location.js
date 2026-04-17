import location from "./img/food3-webp.webp";

const content = document.querySelector(".content");

const locationImage = document.createElement("img");
locationImage.src = location;

export default function display () {
    content.appendChild(locationImage);
}