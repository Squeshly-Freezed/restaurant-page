import hours from "./img/hours-webp.webp";

const content = document.querySelector(".content");

const hoursImage = document.createElement("img");
hoursImage.classList.add("hours-image");
hoursImage.src = hours;

export default function display () {
    content.appendChild(hoursImage);
}