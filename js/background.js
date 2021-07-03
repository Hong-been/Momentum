//../img/Back
const images=[
    "Back0.jpg",
    "Back1.jpg",
    "Back2.jpg",
    "Back3.jpg",
    "Back4.jpg",
]

const background=document.createElement("img");
document.body.appendChild(background);

const choosenImage=images[Math.floor(Math.random()*images.length)];

background.src=`img/${choosenImage}`;
console.dir(background);