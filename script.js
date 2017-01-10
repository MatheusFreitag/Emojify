new Vue({
  el: "#app",
  data: {
    message: ""
  }

});

Vue.filter('emojify', function (value) {
  var list = listify(value);
  var string =  convertToEmoji(list);
  return string;
});



/** Function to make string into list **/
function listify(value){
  var list = [];
  for (var i = 0; i < value.length; i++) {
    list.push(value[i]);
  }
  return list;
}


function convertToEmoji(list){
  var aux = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i] === 'A' || list[i] === 'a'){
      aux.push(getA());
    }
    else if (list[i] === 'B' || list[i] === 'b'){
      aux.push(getB());
    }
    else if (list[i] === 'C' || list[i] === 'c'){
      aux.push(getC());
    }
    else if (list[i] === 'D' || list[i] === 'd'){
      aux.push(getD());
    }
    else if (list[i] === 'E' || list[i] === 'e'){
      aux.push(getE());
    }
    else if (list[i] === 'F' || list[i] === 'f'){
      aux.push(getF());
    }
    else if (list[i] === 'G' || list[i] === 'g'){
      aux.push(getG());
    }
    else if (list[i] === 'H' || list[i] === 'h'){
      aux.push(getH());
    }
    else if (list[i] === 'I' || list[i] === 'i'){
      aux.push(getI());
    }
    else if (list[i] === 'J' || list[i] === 'j'){
      aux.push(getJ());
    }
    else if (list[i] === 'K' || list[i] === 'k'){
      aux.push(getK());
    }
    else if (list[i] === 'L' || list[i] === 'l'){
      aux.push(getL());
    }
    else if (list[i] === 'M' || list[i] === 'm'){
      aux.push(getM());
    }
    else if (list[i] === 'N' || list[i] === 'n'){
      aux.push(getN());
    }
    else if (list[i] === 'O' || list[i] === 'o'){
      aux.push(getO());
    }
    else if (list[i] === 'P' || list[i] === 'p'){
      aux.push(getP());
    }
    else if (list[i] === 'Q' || list[i] === 'q'){
      aux.push(getQ());
    }
    else if (list[i] === 'R' || list[i] === 'r'){
      aux.push(getR());
    }
    else if (list[i] === 'S' || list[i] === 's'){
      aux.push(getS());
    }
    else if (list[i] === 'T' || list[i] === 't'){
      aux.push(getT());
    }
    else if (list[i] === 'U' || list[i] === 'u'){
      aux.push(getU());
    }
    else if (list[i] === 'V' || list[i] === 'v'){
      aux.push(getV());
    }
    else if (list[i] === 'W' || list[i] === 'w'){
      aux.push(getW());
    }
    else if (list[i] === 'X' || list[i] === 'x'){
      aux.push(getX());
    }
    else if (list[i] === 'Y' || list[i] === 'y'){
      aux.push(getY());
    }
    else if (list[i] === 'Z' || list[i] === 'z'){
      aux.push(getZ());
    }
    else if (list[i] === '?'){
      aux.push(getQuestion());
    }
    else if (list[i] === '!'){
      aux.push(getExclamation());
    }

    else{
      aux.push(list[i])
    }
  }

  var string = "";

  for (var i = 0; i < aux.length; i++) {
    if (aux[i] === " ") {
      string = string + "▫️" + aux[i];
    }
    else{
      string = string+aux[i];
    }

  }

  return string;
}


/** Functions for letters **/
function getA() {
  var list = [" 🔼  ", " 🖇  ", " 🅰️ "];
  var index = Math.floor((Math.random() * 3));
  return list[index];
}

function getB() {
  var list = [" 🅱️ "];
  var index = Math.floor((Math.random() * 1));
  return list[index];
}

function getC() {
  var list = [" ©️ ", " 🗜  "];
  var index = Math.floor((Math.random() * 2));
  return list[index];
}

function getD() {
  var list = [" ↩️  ", "  🌮  ", " 🇩  "];
  var index = Math.floor((Math.random() * 3));
  return list[index];
}

function getE() {
  var list = [" 📧  "];
  var index = Math.floor((Math.random() * 1));
  return list[index];
}

function getF() {
  var list = [" 🎏  "];
  var index = Math.floor((Math.random() * 1));
  return list[index];
}

function getG() {
  var list = [" 🇬  "];
  var index = Math.floor((Math.random() * 1));
  return list[index];
}

function getH() {
  var list = [" 🛏 ", " ♊ "];
  var index = Math.floor((Math.random() * 2));
  return list[index];
}

function getI() {
  var list = [" ℹ️ "];
  var index = Math.floor((Math.random() * 1));
  return list[index];
}

function getJ() {
  var list = [" 🗾  ", " 🌶 "];
  var index = Math.floor((Math.random() * 2));
  return list[index];
}

function getK() {
  var list = [" 🎋 "];
  var index = Math.floor((Math.random() * 1));
  return list[index];
}

function getL() {
  var list = [" 👢  ", " 💪  "];
  var index = Math.floor((Math.random() * 2));
  return list[index];
}

function getM() {
  var list = [" 〽️ ", " Ⓜ "];
  var index = Math.floor((Math.random() * 2));
  return list[index];
}

function getN() {
  var list = [" ♑ "];
  var index = Math.floor((Math.random() * 1));
  return list[index];
}

function getO() {
  var list = [" ⭕  ", " 🍪 "];
  var index = Math.floor((Math.random() * 2));
  return list[index];
}

function getP() {
  var list = [" 🅿 "];
  var index = Math.floor((Math.random() * 1));
  return list[index];
}

function getQ() {
  var list = [" ♌ ", " 🍳  "];
  var index = Math.floor((Math.random() * 2));
  return list[index];
}

function getR() {
  var list = [" 🇷  ", "  ®️  "];
  var index = Math.floor((Math.random() * 2));
  return list[index];
}

function getS() {
  var list = [" ⚡ "];
  var index = Math.floor((Math.random() * 1));
  return list[index];
}

function getT() {
  var list = [" 🌴  ", " ☂ "];
  var index = Math.floor((Math.random() * 2));
  return list[index];
}

function getU() {
  var list = [" ⛎  ", " 🐋  "];
  var index = Math.floor((Math.random() * 2));
  return list[index];
}

function getV() {
  var list = [" ♈  ", " ✔️  ", "   ✅  "];
  var index = Math.floor((Math.random() * 3));
  return list[index];
}

function getW() {
  var list = [" 〰️  "];
  var index = Math.floor((Math.random() * 1));
  return list[index];
}

function getX() {
  var list = [" ❌  ", " ✂️ "];
  var index = Math.floor((Math.random() * 2));
  return list[index];
}
function getY() {
  var list = [" ✌️ ", " 🌱  "];
  var index = Math.floor((Math.random() * 2));
  return list[index];
}

function getZ() {
  var list = [" Ⓩ "];
  var index = Math.floor((Math.random() * 1));
  return list[index];
}

function getQuestion() {
  var list = [" ❓ "];
  var index = Math.floor((Math.random() * 1));
  return list[index];
}

function getExclamation() {
  var list = [" ❗ "];
  var index = Math.floor((Math.random() * 1));
  return list[index];
}
