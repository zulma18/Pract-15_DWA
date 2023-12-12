// Definicion de la funcion esVocal que verifica si un caracter es una vocal (mayuscula o minuscula)
function esVocal(caracter) {
    // Utiliza una expresion regular para verificar si el caracter es una vocal
    return /^[aeiouAEIOU]$/.test(caracter);
}

// Funcion que se llama al hacer clic en el boton para verificar si un caracter es una vocal 
// CheckVowel es una funcion que coordina la obtencion del caracter ingresado, 
// la verificacion de si es una vocal, y la presentacion del resultado en la interfaz de usuario. 
function checkVowel() {
    // Obtener el elemento de input donde se ingresa el caracter
    const characterInput = document.getElementById(`character`);

    // Obtener el valor del input (el caracter ingresado)
    const character = characterInput.value;

    // Obtener el elemento donde se mostrara el resultado
    const resultElement = document.getElementById('result');

    // Verificar si el caracter es una vocal y mostrar el resultado ccorrespondiente
    if (esVocal(character)) {
        resultElement.textContent = `El caracter '${character}' es una vocal. `;
    } else {
        resultElement.textContent = `El caracter '${character}' no es una vocal.`;
    }


}