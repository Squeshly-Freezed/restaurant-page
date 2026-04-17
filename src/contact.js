import food1 from "./img/food1-webp.webp";

const content = document.querySelector(".content");

const food1Image = document.createElement("img");
food1Image.classList.add("food1");
food1Image.src = food1;

const contactDiv = document.createElement("div");
contactDiv.classList.add("contact-div");
const infoDiv = document.createElement("div");
infoDiv.classList.add("info-div");
const addressInfo = document.createElement("a");
addressInfo.href = "https://maps.app.goo.gl/6KjhwhHFLpXjo5ri8";
addressInfo.textContent = "50 Bridge Street, Nelson 7010";
addressInfo.target = "_blank";
addressInfo.rel = "noopener noreferrer";
const contactInfo = document.createElement("a");
contactInfo.textContent = "Ph: 03 546 6123";
contactInfo.href = "tel:+6435466123";
const serviceInfo = document.createElement("a");
serviceInfo.textContent = "Vegan / Vegetarian options, Kid's menu, Take-away / Dine-in";
const tagInfo = document.createElement("a");
tagInfo.textContent = "Authentic, Simple, Japanese"

export default function display () {
    infoDiv.appendChild(tagInfo);   
    infoDiv.appendChild(serviceInfo);
    infoDiv.appendChild(addressInfo);
    infoDiv.appendChild(contactInfo);
    contactDiv.appendChild(food1Image);
    contactDiv.appendChild(infoDiv);
    content.appendChild(contactDiv);
}