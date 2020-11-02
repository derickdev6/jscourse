//Array normal
let mypc = ["DerickPC", "Ubuntu20.04", "Ryzen 1400", "8GB", "B350M"];
//lo muestro entero
document.write("Array normal <br><br>")
for (var i = 0; i < mypc.length; i++) {
  console.log(mypc[i]);
  document.write(mypc[i] + "<br>");
}

//Array asociativo
let mypc2 = {
  name : "DerickPC",
  os : "Ubuntu20.04",
  procesor : "Ryzen 1400",
  ram : "8GB",
  mobo : "B350M",
};

//mostrando entero
document.write("<br><br>Array asociativo <br><br>");

console.log(mypc2.name);
console.log(mypc2.os);
console.log(mypc2.procesor);
console.log(mypc2.ram);
console.log(mypc2.mobo);

document.write(mypc2.name + "<br>");
document.write(mypc2.os + "<br>");
document.write(mypc2.procesor + "<br>");
document.write(mypc2.ram + "<br>");
document.write(mypc2.mobo + "<br>");
