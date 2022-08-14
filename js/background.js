const images = ["a1.jpg", "a2.jpg", "a3.jpg", "a4.jpg", "a5.jpg", "a6.jpg", "a7.jpg", "a8.jpg", "a9.jpg"];
const BGI_CLASSNAME_KEY = "bgi";

const chosenImage =images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add(BGI_CLASSNAME_KEY);
document.body.appendChild(bgImage);

