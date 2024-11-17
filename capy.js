function seleccion(id){
    const mostrar = document.querySelectorAll('.indicado');
    mostrar.forEach(mostrar => {
        if (mostrar.id !== id) {
            mostrar.style.display = 'none';
        }
    });
    //acá va buscar todos los que tengan la clase "indicado" los evaluará y si son distintos del seleccionaod los ocultará//
    const sencillo = document.getElementById(id);
        if (sencillo.style.display === "none" || sencillo.style.display === "") {
            sencillo.style.display = "block";
            }  else {
            sencillo.style.display = "none";
        }
}
//acá cuando toque una de las palabras si no es visible entonces lo será de lo contrario se ocultará//
//entonces, vamos a decir que tengo la sección x abierta y me voy a desplazar a la sección y, entonces aquí la constante mostrar entra en acción. como la sección y tiene un id distinto de la sección x, la constante mostrar aplica su definición donde indica que si el id de una sección es distinta a la seleccioanda (en este caso y) se ocultará//
//entonces en la constante sencillo, es la que hace que yo al tocar nuevamente se oculte, pues la al tocar la palabra pasa a visible, y si la vuelvo a tocar si vuelve una condición falsa por lo que lo ocultará.//
