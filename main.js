import { James } from "./data.js";

const media = document.querySelector("#media");
const felicitacion = document.querySelector("#felicitacion");
const mensaje = document.querySelector("#mensaje");
const category1 = document.querySelector("#category1");
const category1value = document.querySelector("#category1value");
const category1icon = document.querySelector("#category1icon");
const category2 = document.querySelector("#category2");
const category2value = document.querySelector("#category2value");
const category2icon = document.querySelector("#category2icon");
const category3 = document.querySelector("#category3");
const category3value = document.querySelector("#category3value");
const category3icon = document.querySelector("#category3icon");
const category4 = document.querySelector("#category4");
const category4value = document.querySelector("#category4value");
const category4icon = document.querySelector("#category4icon");

const pintarMedia = (persona) => {
  const total =
    persona[0].score + persona[1].score + persona[2].score + persona[3].score;
  const valorMedio = total / persona.length;
  category1.innerHTML = persona[0].category;
  category1icon.src = persona[0].icon;
  category1icon.alt = "Icono " + persona[0].category;
  category1value.innerHTML = persona[0].score;
  category2value.innerHTML = persona[1].score;
  category2icon.src = persona[1].icon;
  category2icon.alt = "Icono " + persona[1].category;
  category2.innerHTML = persona[1].category;
  category3value.innerHTML = persona[2].score;
  category3.innerHTML = persona[2].category;
  category3icon.src = persona[2].icon;
  category3icon.alt = "Icono " + persona[2].category;
  category4value.innerHTML = persona[3].score;
  category4.innerHTML = persona[3].category;
  category4icon.src = persona[3].icon;
  category4icon.alt = "Icono " + persona[3].category;
  media.innerHTML = Math.floor(valorMedio);
  valorMedio <= 90
    ? (mensaje.innerHTML =
        "You scored higher than 65% of the people who have taken these tests.")
    : (mensaje.innerHTML = "You lose");
};

pintarMedia(James);
