//JS intenta convertir los datos para poder operarlos eficazmente.
//para evitar la coerción se utiliza la comparación estricta (===) y no la simple (==)

true + 54
//55
true == 54
//false
true == 1
//true
54 == true
//false
true - 'acv'
//NaN
true - '1'
//0