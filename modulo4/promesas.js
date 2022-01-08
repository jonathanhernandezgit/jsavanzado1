const promise = new Promise((resolve, reject) =>{

    let allOk = true;

    if(allOk){
        resolve('todo salió bien');
    }else{
        reject(new Error('hubo algún error'));
    }
});

promise.then(valor =>{
    console.log(valor);
},error => {
    console.log(error);
});