let data = [{
    img: "imagenes/personaje1.jpg",
  alt: "una chica con pelo negro y flequillo",
    pregunta: "¿Quién es el personaje de la imagen?",
  opciones: [{
    text: "Doris Tiedemann",
    isCorrect: false
  }, {
    text: "Hannah Kahnwald",
    isCorrect: false
  }, {
    text: "Martha Nielsen",
    isCorrect: true
  }]
},{
    img: "imagenes/temporada1.jpg",
  alt: "Mikkel cuando recién conoce a Inés Kahnwald",
    pregunta: "¿En qué temporada aparece esta escena?",
  opciones: [{
    text: "Temporada 1",
    isCorrect: true
  }, {
    text: "Temporada 2",
    isCorrect: false
  }, {
    text: "Temporada 3",
    isCorrect: false
  }]
},{
    img: "imagenes/año1.jpg",
  alt: "Construyendo la empresa",
    pregunta: "¿En qué año transcurre esta escena?",
  opciones: [{
    text: "1986",
    isCorrect: false
  }, {
    text: "1953",
    isCorrect: true
  }, {
    text: "2050",
    isCorrect: false
  }]
},{
    img: "imagenes/temporada2.jpg",
  alt: "Jonas viajando en el tiempo por primera vez en presencia de Adam",
    pregunta: "¿En qué temporada aparece esta escena?",
  opciones: [{
    text: "Temporada 1",
    isCorrect: false
  }, {
    text: "Temporada 2",
    isCorrect: false
  }, {
    text: "Temporada 3",
    isCorrect: true
  }]
},{
    img: "imagenes/personaje2.jpg",
  alt: "niño que viaja por primera vez en el tiempo",
    pregunta: "¿Quién es el personaje de la imagen?",
  opciones: [{
    text: "Bartosz Tiedemann",
    isCorrect: false
  }, {
    text: "Mikkel Nielsen",
    isCorrect: true
  }, {
    text: "Magnus Nielsen",
    isCorrect: false
  }]
},{
    img: "imagenes/temporada3.jpg",
  alt: "Peter y Elisabeth Doppler en la lluvia en un mundo post-apocalíptico",
    pregunta: "¿En qué temporada aparece esta escena?",
  opciones: [{
    text: "Temporada 3",
    isCorrect: false
  }, {
    text: "Temporada 1",
    isCorrect: false
  }, {
    text: "Temporada 2",
    isCorrect: true
  }]
},{
    img: "imagenes/año2.jpg",
  alt: "personas armadas en un mundo post-apocaliptico",
    pregunta: "¿En qué año transcurre esta escena?",
  opciones: [{
    text: "2052",
    isCorrect: true
  }, {
    text: "1953",
    isCorrect: false
  }, {
    text: "1986",
    isCorrect: false
  }]
},{
    img: "imagenes/personaje3.jpg",
  alt: "Mujer con la cara lastimada, ciega de un ojo y sordo muda",
    pregunta: "¿Quién es el personaje de la imagen?",
  opciones: [{
    text: "Franziska Doppler",
    isCorrect: false
  }, {
    text: "Charlotte Doppler",
    isCorrect: false
  }, {
    text: "Elisabeth Doppler",
    isCorrect: true
  }]
},{
    img: "imagenes/año3.jpg",
  alt: "primer niño desaparecido, pelo rojo amordazado en una silla de metal",
    pregunta: "¿En qué año transcurre esta escena?",
  opciones: [{
    text: "1953",
    isCorrect: false
  }, {
    text: "1986",
    isCorrect: true
  }, {
    text: "2052",
    isCorrect: false
  }]
}]

let step = 0;
let countCorrect = 0;
let cuestionario = data[step];

function chargeElements (cuestionario) {
  let imgElement = document.getElementById("imgcuestionario");
  imgElement.src = cuestionario.img;
  imgElement.alt = cuestionario.alt;
  let pregunta = document.getElementById("pregunta");
  pregunta.innerText = cuestionario.pregunta;
  for(let i = 0; i < cuestionario.opciones.length; i++ ) {
    let opcion = cuestionario.opciones[i];
    let buttonElement = document.getElementById("buttonAnswerd"+i);
    buttonElement.innerText = opcion.text;
    buttonElement.onclick = function (){
        addIsCorrect(opcion.isCorrect);
      sumStep();
if(step == (data.length)) {
        endGame();
      } else {
        var newCuestionario = data[step];
        chargeElements(newCuestionario);
      }
    };
  }
}

function addIsCorrect(isCorrect) {
    if(isCorrect) {
    countCorrect += 1;
  }
}

function sumStep() {
    step += 1;
}

chargeElements(cuestionario) 

function endGame() {
    let sectionCuestionaryElement = document.getElementById("sectionCuestionary");
    sectionCuestionaryElement.classList.add("d-none");
    let endGameElement = document.getElementById("endGame");
    endGameElement.classList.remove("d-none");
    let textCorrectAnswerdElement = document.getElementById("correctAnswerd");
    textCorrectAnswerdElement.innerText = "Tu resultado: " + countCorrect + "/" + data.length;
    let textResult = "";
    if (countCorrect == data.length) {
      textResult = "Muy bien ¡Ganaste! Contestaste todas las preguntas correctas";
    } else if (countCorrect <= 3) {
      textResult = "Contestaste muy pocas, tenes que volver a mirar la serie";
    } else if ((countCorrect > 3) || (countCorrect <= 6)){
      textResult = "Mas o menos, pero podes volver a intentarlo";
    } else if (countCorrect > 6) {
      textResult = "Ya casi, pero te faltó un poco para ganar";
    }

    let textDescriptionResultElement = document.getElementById("descriptionResult");
    textDescriptionResultElement.innerText = textResult;
}
console.log(countCorrect);

function reset() {
  step = 0;
  countCorrect = 0;
  let cuestionario = data[step];
  chargeElements(cuestionario);
  let endGameElement = document.getElementById("endGame");
  endGameElement.classList.add("d-none");
  let sectionCuestionaryElement = document.getElementById("sectionCuestionary");
  sectionCuestionaryElement.classList.remove("d-none");
}
