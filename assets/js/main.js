let casilla = document.getElementById("casilla");
const botones = document.querySelectorAll("button");

let carTemp = "";

botones.forEach((element) => {
  if (element.innerHTML == "") {
  } else {
    element.onclick = () => {
      escribirC(element.innerHTML);
      //console.log(element.innerHTML);
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
        //vC.length = vC.length - 4;
        //vC[vC.length - 1] = " ";
        carTemp = vC.join("");
        console.log(carTemp);
        //carTemp.slice(carTemp.length - 6, carTemp.length);
        //console.log("d: " + carTemp);
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
  //let cT2 = (carTemp += "&nbsp");
  //casilla.innerHTML = carTemp += "&nbsp";
  /*let cT2 = (carTemp += "&nbsp");
  casilla.innerHTML = cT2;
  carTemp += " ";
  console.log(carTemp);
  console.log(cT2); */
  carTemp += "&nbsp;";
  casilla.innerHTML = carTemp;

  console.log("a: " + carTemp);

  //carTemp = carTemp.substring(0, carTemp.length - 5);
};
