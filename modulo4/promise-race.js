const primerProceso = new Promise((resolve, reject) =>{
    setTimeout(resolve, 3000, 'primer valor');
});

const segundoProceso = new Promise((resolve, reject)=>{
    setTimeout(resolve, 500, 'segundo valor');
});

const tercerProceso = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, 'tercer valor');
});

const listaPromesas = [primerProceso, segundoProceso, tercerProceso];


Promise.race(listaPromesas).then(valores =>{
    console.log(valores);
}, error => {
    console.log(error);
})