
//Map es como un diccionario, se puede asociar una clave con un valor.
//La clave puede ser de tipo String, Int u Objeto
const objetoMap = new Map();

objetoMap.set('un string','valor asociado a un string');
const miObjeto = {};
objetoMap.set(miObjeto, 'valor asociado a un objeto');
objetoMap.set(12, 'valor asociado a un número');


//se itera el map con for
for ([key, value] of objetoMap) {
    console.log(value);
}

//WeakMap: El wakmap permite asociar únicamente un objeto con un valor.
//la ventaja es que mantiene una memoria más 'limpia', la desventaja es
//que su referencia es débil, por lo que si se elimina el objeto referenciado 
//se puede perder información

const objetoWeakMap = new WeakMap();
//Por lo tanto la instrucción escrita a continuación debería mostrar un error
//objetoWeakMap.set('un string', 'valor asociado a un string');

//Esta es la forma correcta de setear un weakmap
objetoWeakMap.set({},'valor asociado a un objeto');

// objetoWeakMap.forEach(element => {
//     console.log(element);
// });
