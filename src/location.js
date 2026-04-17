const content = document.querySelector(".content");

const mapFrame = document.createElement("iframe");
mapFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.663508082378!2d173.2833001!3d-41.272661899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3bedca177f5f63%3A0x60eb73356f560cbd!2zS29oYXJ1LVNob2t1ZG8o44GT44Gv44KL6aOf5aCCKQ!5e0!3m2!1sen!2snz!4v1776415518708!5m2!1sen!2snz";
mapFrame.width = "600";
mapFrame.height = "450";
mapFrame.style = "border:0;";
mapFrame.allowfullscreen = "";
mapFrame.loading = "lazy";
mapFrame.referrerPolicy = "no-referrer-when-downgrade";
mapFrame.classList.add("map-frame");

export default function display () {
    content.appendChild(mapFrame);
}