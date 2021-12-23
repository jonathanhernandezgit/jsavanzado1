
const objetoMap = new Map();
objetoMap.set('un string', 'un valor asociado a un string');


const miObjeto = {};
objetoMap.set(miObjeto, 'valor asociado a un objeto')
objetoMap.set(12, 'valor asociado a un número');

for([key, value] of objetoMap) {
    console.log(value);
}

const obj = {}
obj['valorKey'] = 12;
obj['valorKey2'] = 56;
obj['valorKey3'] = 78;


//Esto daría un error porque el objeto obj no es iterable, el objetoMap sí
// for ([key, value] of obj) {
//     console.log();
// }

const keys = Object.keys(obj);
//forma de iterar un objeto mediante forEach
keys.forEach(key => {
    console.log(obj[key]);
})



