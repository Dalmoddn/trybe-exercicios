const sortNumbers = (arrayNumeros) => {
    let aux;

    for (let index = 0; index < arrayNumeros.length; index++) {
        for (let indexDeDentro = index + 1; indexDeDentro < arrayNumeros; indexDeDentro =+ 1) {
            if (arrayNumeros[index] > arrayNumeros[indexDeDentro]) {
                aux = arrayNumeros[index];
                arrayNumeros [index] = arrayNumeros[indexDeDentro];
                arrayNumeros[indexDeDentro] = aux;

            }
        }
        
    }
}

sortNumbers([99, 5, 6, 1, 0]); //[0, 1, 5, 6, 99]