const formulario = document.querySelector('#formulario');


/*Funcion para extraer todos los datos del formulario y convertirlos en formato JSON */

const procesaTodo = (event) => {
 /*Para una accion predeterminada del evento*/
 event.preventDefault();
 /*constructor que crea un objeto de tipo FormData */
const datos = new FormData(event.target);

 /* El método Object.fromEntries() transforma una lista de pares con [clave-valor] en un objeto.*/
const datosleidos = Object.fromEntries(datos.entries());
console.log(JSON.stringify(datosleidos));
alert(JSON.stringify(datosleidos))

}



/*Funcion Para Extraer un solo dato del formulario */

// const procesaDatos = (event) => {
//     /*Para una accion predeterminada del evento*/
//     event.preventDefault();

//     /*constructor que crea un objeto de tipo FormData */
//     const datos = new FormData(event.target);

//     /*El metodo get retorna el valor associado con la clave del objeto FormData */
//     const correo = datos.get('email');   
//     console.log({correo});

// }

formulario.addEventListener('submit', procesaTodo);


// Font: https://www.youtube.com/watch?v=Os1t1BRZU6w&ab_channel=Emprinnos
///////////////////////////////////////////////////////////////////////// 