function saludo(color)
{
  document.write("Saludos al "+color);
  document.write("</br>");
}


// Definicion de variable
var nom = "Luis";
let nom1 = "Pedro";
var num = 2, num1 = 5;
let array = [1,2,3,4];
var lista = ["azul","rojo","verde"];

// Definir constante
const pi = 3.1416;

// operadores aritmeticos +, -, *, /
suma = num + num1;
mult = (num * num1) * pi;
residuo = num1 % num;


// impresion de diversas formas
document.write("<h1>Aprendiendo amplio paso 2 Javascript</h1>");
// console.log("Suma:", suma);
document.write("</br>Suma: ", suma);
document.write("</br>Residuo: ", residuo);
alert("Producto: "+ mult);

// Seleccion multiple con valores

switch (suma) {
    case 2:
        document.write("</br>Es dos");
        break;
    case 4:
        document.write("</br>Es cuatro");
        break;
    default:
        document.write("</br>Ninguno");
        break;
}

// Seleccion multiple con operadores relacionales y logicos
switch (suma) {
    case suma < 0:
        document.write("</br>Es negativo");
        break;
    case suma == 2 || suma == 4:
        document.write("</br>Es par");
        break;
    default:
        document.write("</br>No cumple otras");
        break;
}

// Ciclo FOR recorrer array y listas
document.write("</br>");
for(i=0;i<lista.length;i++)
{
 // document.writeln(lista[i]);
 // llamando a una funcion
 saludo(lista[i]);
}

document.write("</br>");
for(i=(array.length)-1;i>=0;i--)
{
 document.writeln(array[i]);
}


// ciclo while para reccorre un string
document.write("</br>");
i=nom.length - 1
while (i>=0)
{
 document.writeln(nom[i]);
 i--;
}