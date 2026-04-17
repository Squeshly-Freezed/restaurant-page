import food1 from "./img/food1-webp.webp";

const content = document.querySelector(".content");

const food1Image = document.createElement("img");
food1Image.classList.add("food1");
food1Image.src = food1;

const contactDiv = document.createElement("div");
contactDiv.classList.add("contact-div");
const infoDiv = document.createElement("div");
infoDiv.classList.add("info-div");
const contactInfo = document.createElement("p");
contactInfo.innerText = "Phone: 03 546 6123";
const addressInfo = document.createElement("p");
addressInfo.innerText = "50 Bridge Street, Nelson 7010";


export default function display () {
    infoDiv.appendChild(addressInfo);
    infoDiv.appendChild(contactInfo);
    contactDiv.appendChild(food1Image);
    contactDiv.appendChild(infoDiv);
    content.appendChild(contactDiv);
}