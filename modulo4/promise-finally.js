
const promesa = new Promise((resolve, reject) =>{
    setTimeout(resolve, 500, 5);
});

promesa.then(primerValor => {
    console.log('El primer valor es: ' , primerValor);
    return primerValor * primerValor;
}).then(segundoValor => {
    throw new Error('Un error ha sucedido: (')
    console.log('El segundo valor es' , segundoValor);
    return segundoValor * segundoValor;
}).then(tercerValor => {
    console.log('El tercer valor es: ' , tercerValor);
}).catch(error => {
    console.log(error);
}).finally(()=>{
    console.log('La cadena ha terminado');
})