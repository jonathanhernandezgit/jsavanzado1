//el objeto set garantiza que no se repitan elementos dentro de él

const objetoSet = new Set([1, 'string', {}, {nombre:'Natalia'}]);
//Aunque no resultaría un error, map no almacena dos veces el mismo elemento
objetoSet.add(12);
objetoSet.add(12);

console.log('Recorriendo el objeto Set: ');

//iterando set utilizando forEach
objetoSet.forEach(value => {
    console.log(value);
})

//interando set utilizando for of

for(value of objetoSet) {
    console.log(value);
}

console.log(objetoSet.has(12));
console.log(objetoSet.size);

//El objeto WeakSet únicamente puede almacenar objetos, no son iterables y mantienen
//una referencia débil a los valores que almacena. Si el valor al que hace referencia
//es borrado, será colectado por el garbage collector.

const objetoWeakSet  = new WeakSet([{}, {nombre:'Natalia'}]);
//Resultaría un error, ya que 12 no es un objeto
objetoWeakSet.add(12);

//Resultaría un error, ya que WeakSet no es iterable
for (value of objetoWeakSet) {
    console.log(value);
}