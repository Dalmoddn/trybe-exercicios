const biggerSmallerNumber = (arrayNumeros) => {
    let bigger = arrayNumeros[0]
    let smaller = arrayNumeros[0]

    for (let index = 0; index < arrayNumeros.length; index += 1) {
        if (arrayNumeros[index] > bigger) {
            bigger = arrayNumeros[index]
        } else if (arrayNumeros[index] < smaller)
            smaller = arrayNumeros[index];
}
    let mensagem = 'Maior:  ${bigger}'
                    'Menor: ${smaller}'
    return mensagem;
}

biggerSmallerNumber([0, 34, 56, 100, 2]);
