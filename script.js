/*Nuestro ejercicio, será hacer una Chauchat virtual, que reproduzca su comportamiento.

Por un lado habrás de crear una variable cargador donde habrá de guardar unos 7 "pium!"

El otro elemento será nuestra chauchat, que "hace cosas", y será donde pondremos el cargador para que haga cosas.

chauchat(cargador)

Cuando ejecutemos dicho código, veremos impresos todos los "pium!" del cargador, uno tras otro.

En el caso de 3 "pium!" en el cargador, veremos en la consola:

pium!
pium!
pium!
Zona premium:

Representaremos los 2 principales problemas:

Al tener el cargador abierto, era posible que se bloquease si algo entraba, como una "ramita".

Digamos que existe un 80% de probabilidad de que se quede "pillada":

Si se queda pillada, no habrá tiros y sólo mostrará un mensaje: "Illo, me he quedao pillá!"
En este enlace sabrás cómo generar números aleatorios: Math.random()

Para evitar que se caliente y se bloquee, cada 3 disparos se imprimirá un espacio:

pium!
pium!
pium!

pium!
pium!
pium!

pium!
pium!
pium!
*/



  function recargar() {
     let disparos = prompt("¡Dispara!");
      switch (disparos) {
        case "1":
            console.log("pium!\n");
            break;
        case "2":
            console.log("pium!\n","pium!\n");
            break;
        case "3":
            console.log("pium!\n","pium!\n","pium!\n");
            break;
        case "4":
            console.log("pium!\n"," pium!\n","pium!\n","pium!\n");
            break;
        case "5":
            console.log(" pium!\n","pium!\n"," pium!\n","pium!\n","pium!\n");
            break;
        case "6":
            console.log(" pium!\n","pium!\n","pium!\n"," pium!\n","pium!\n","pium!\n");
            break;
        case "7":
            console.log(" pium!\n","pium!\n","pium!\n"," pium!\n","pium!\n","pium!\n","pium!\n");
            break;
        default:
            console.log("Illo me he quedao pillao"); 
     }
    }
 

  console.log(recargar());

  