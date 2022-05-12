// solução 1
function verificaPalindromo(string) {
    if (!string) return;

    return string.split("").reverse().join("") === string; 
    // separa as letras. método do array, vai reverter todos os caracteres. junta todos os elementos, formando uma string.
}

console.log(verificaPalindromo("batata"));

// solução 2

function verificaPalindromo(string) {
    if (!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }  
        
        //comparando string com string
    } 

    return true;
}

console.log(verificaPalindromo('aba'));