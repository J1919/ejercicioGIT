var materia = "mater";
var nombre = null;
var datosCorrectos = 0;
var a = false;
var nota1 = 0;
var nota2 = 0;
var nota3 = 0;
var sum = 0;
var prom = 0;

alert("PROMEDIO NOTAS ESTUDIANTES");

if (isNaN(materia) && datosCorrectos==0) {
    let nombre = prompt("Ingrese el nombre del estudiante: ");
    let materia = prompt("Ingrese el nombre de la materia");

    alert("Los datos ingresados son: nombre : " + nombre + "materia : " + materia);
    datosCorrectos = prompt("El nombre y materia son correctos? \nSI ingrese 1 \nNO ingrese 0");
} 
else {
    alert("Vuelva ingresar NOMBRE y MATERIA. Recuerde los datos son de tipo texto.")
    datosCorrectos = 0;
}
alert("Ingrese las tres notas del estudiante. Recuerde la nota debe ser entre 0 a 10 puntos");
while (a == true) {
    nota1 = prompt("Nota 1: ");
    nota2 = prompt("Nota 2: ");
    nota3 = prompt("Nota 3: ");
    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);
    nota3 = parseFloat(nota3);
    alert("Las notas ingresadas son: " + nota1 + ", " + nota2 + ", " + nota3);
    if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10) {
        a = false;
        sum = nota1 + nota2 + nota3;
        alert(+sum);
        prom = sum / 3;
        alert(prom);
        if (prom >= 7) {
            alert(+nombre + " Felicidades! has aprobado con un promedio de:" + prom)
        }
        else {
            alert(+nombre + " Gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es: " + prom)
        }
    }
    else {
        alert("Alerta. La nota debe ser entre 0 a 10 puntos")

    }
}

alert("fin " + nota1 + ", " + nota2 + ", " + nota3);