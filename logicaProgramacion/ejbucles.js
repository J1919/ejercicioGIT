/* Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. Los números se separarán por comas.   */
let a=0;

a=parseInt(prompt("ingresa un numero"));
for(let i=0 ; i<=a; i++ ){
    alert(+i+",")
}

let b=0
b=parseInt(prompt("ingresa un numero"));
for(let i=b; i>=0;i--){
    alert()
}



let altura = parseInt(prompt("Ingrese la altura del triángulo:"));

if (!isNaN(altura) && Number.isInteger(altura) && altura > 0) {
  let asteriscos = "";

  for (let i = 1; i <= altura; i++) {
    asteriscos += "*".repeat(i);
    asteriscos += "\n"; 
  }

  alert(asteriscos);
} else {
  console.log("Por favor, ingrese un número entero positivo válido.");
}


let num1 = parseInt(prompt("Ingrese numero:"));

if (!isNaN(num1) ) {
  let asteriscos = "";

  for (let i = 0; i <= num1; i++) {
    asteriscos += i;
    asteriscos += ","; 
  }

  alert(asteriscos);
} else {
  console.log("Por favor, ingrese un número entero positivo válido.");
}


let num2 = parseInt(prompt("Ingrese numero:"));

if (!isNaN(num2) ) {
  let regresiva = "";

  for (let i = num2; i >=0; i--) {
    regresiva += i;
    regresiva += ","; 
  }

  alert(regresiva);
} else {
  console.log("Por favor, ingrese un número entero positivo válido.");
}
