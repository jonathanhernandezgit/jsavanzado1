//todos los elememntos que se añaden a Set siempre son únicos

const objetoSet = new Set([1, 'string', {}, {nombre:'natalia'}]);
//No es posible acceder a un elemento mediante un índice
console.log(objetoSet[0]);

objetoSet.add(true);

console.log('Recorriendo el objeto Set:');

for (value of objetoSet){
    console.log(value);
}

objetoSet.delete(1);

///
//En el arreglo se puede tener elementos repetidos
const arr = new Array(1,4,2,3,4,{});

arr[0];
arr.push(39);
arr.push(40);
console.log('Recorriendo el objeto Array:');
for(value of arr){
    console.log(value);
}

arr.pop();
arr.shift();
