

//función normal de JS

function functionNormal() {
    for(var i = 0; i < 5; i++) {
        console.log(i);
        return;
    }
}

function* generadorSaludo() {
    yield 'Hola';
    yield '¿Cómo estás?'
    yield 'Un gusto conocerte'
}

let saludo = generadorSaludo();
console.log(saludo.next().value);
console.log(saludo.next().value);
console.log(saludo.next().value);

function* generador(iteraciones) {
    while(iteraciones >= 0)
    yield --iteraciones;
}

let iterador = generador(3);
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());



    
