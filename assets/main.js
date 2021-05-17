let casilla = document.getElementById("casilla");
const botones = document.querySelectorAll("button");

let carTemp = [];

botones.forEach((element) => {
  if (element.innerHTML == "") {
  } else {
    element.onclick = () => {
      escribirC(element.innerHTML);
      //console.log(element.innerHTML);
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
  carTemp += caracter;
  casilla.innerHTML = carTemp;
};

const borrar = () => {
  if (casilla === "") {
    alert("No Nada que borrar que borrar");
  } else {
    if (casilla[casilla.length] === ";") {
      if (carTemp.includes("&nbsp;")) {
        let vC = carTemp.split("");

        vC.splice(vC.length - 6, vC.length);

        carTemp = vC.join("");
        console.log(carTemp);
      }
    } else {
      carTemp = carTemp.substring(0, carTemp.length - 1);
      casilla.innerHTML = carTemp;
    }
  }
};

const saltoLinea = () => {
  casilla.innerHTML = carTemp += "<br/>";
};

const espacio = () => {
  carTemp += " ";
  console.log("carTemp", carTemp);
  carTemp.split("").forEach((element) => {
    if (element == " ") {
      casilla.innerHTML = "&nbsp;";
    }
  });
};
