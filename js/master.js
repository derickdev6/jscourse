document.write("Connected<br><br><br>")

//Tabla de precios de helados

const icprice = [0.6, 1, 1.6, 1.7, 1.8, 2.9, 2.9];
const icname = ["Palito de agua", "Palito de crema", "Heladix", "Heladovich", "Helardo", "Confites", "Pote"];

var dinero = prompt("Cuanto dinero tienes?");

var i = 0;
var op;
var resto;

while (i < 7) {
  console.log(icname[i] + "  -  " + icprice[i])

  if (dinero < icprice[i]){
    if (dinero >= icprice[i-1]) {
      var op = i-1;
    }
  }

  i++;
}
console.log(op);
resto = dinero - icprice[op];
document.write("Con los $" + dinero + " que tienes puedes comprar " + icname[op] + " que vale " + icprice[op] + " y te sobra $" + resto)
