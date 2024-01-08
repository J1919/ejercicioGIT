let materia = "Sociales", nombre = "Juan";
let datosCorrectos = 0, nota1 = 0, nota2 = 0, nota3 = 0, sum = 0, prom = 0;
var a = false;
var mensaje = "";

while (datosCorrectos === 0) {
    nombre = prompt("PROMEDIO NOTAS ESTUDIANTES \nIngrese el nombre del estudiante: ");
    materia = prompt("Ingrese el nombre de la materia");
    datosCorrectos = parseInt(prompt("Los datos ingresados son \nNombre : " + nombre + "\nMateria : " + materia + "\nEl nombre y materia son correctos? \nSI ingrese 1 \nNO ingrese 0"));
    if (datosCorrectos == 1) {
        a = true;
        mensaje += "# " + nombre;
    }
}
alert("Ingrese las tres notas del estudiante. Recuerde la nota debe ser entre 0 a 10 puntos");
while (a == true) {
    nota1 = parseFloat(prompt("Nota 1: "));
    nota2 = parseFloat(prompt("Nota 2: "));
    nota3 = parseFloat(prompt("Nota 3: "));
    alert("Las notas ingresadas son: \n Nota 1: " + nota1 + "\n Nota 2: " + nota2 + "\n Nota 3: " + nota3);
    if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10) {
        a = false;
        sum = nota1 + nota2 + nota3;
        prom = sum / 3;
        if (prom >= 7) {
            mensaje += " Felicidades! has aprobado con un promedio de: " + prom;
            alert(mensaje);
        }
        else {
            mensaje += " Gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es: " + prom;
            alert(mensaje);
        }
    }
    else {
        alert("Alerta. La nota debe ser entre 0 a 10 puntos")
    }
    mensaje = "Gracias";
}
