//../img/Back
const images=[
    "Back0.jpg",
    "Back1.jpg",
    "Back2.jpg",
    "Back3.jpg",
    "Back4.jpg",
]

const choosenImage=images[Math.floor(Math.random()*images.length)];
const url=`img/${choosenImage}`;
document.body.background=url;