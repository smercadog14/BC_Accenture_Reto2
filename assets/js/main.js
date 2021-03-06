let casilla = document.getElementById("casilla");
const botones = document.querySelectorAll("button");

let carTemp = [];

botones.forEach((element) => {
  if (element.innerHTML == "") {
  } else {
    element.onclick = () => {
      escribirC(element.innerHTML);
      dibujarCaracteres(carTemp);
      console.log();
    };
  }
});

const escribirC = (caracter) => {
  switch (caracter) {
    case "Esc":
      break;
    case "Tab":
      break;
    case "Bloq Mayus":
      break;
    case "Mayus":
      break;
    case "Space":
      espacio();
      break;
    case "←":
      borrar();
      break;
    case "↨":
      saltoLinea();
      break;
    default:
      caracterf(caracter);
      break;
  }
};

const caracterf = (caracter) => {
  carTemp.push(caracter);
};

const borrar = () => {
  carTemp.pop();
};

const saltoLinea = () => {
  carTemp.push("<br/>");
};

const espacio = () => {
  carTemp.push("&nbsp;");
};

const dibujarCaracteres = (carTemp) => {
  let newHTML = "";

  carTemp.forEach((element) => {
    newHTML += element;
  });
  casilla.innerHTML = newHTML;
};
