//calculadora.js

module.exports={
    soma(a, b){
        return a+b;
    },

    subtracao(a, b){
        return a-b;
    },

    multiplicao(a, b){
        return a*b;
    },

    divisao(a, b) {
        if (b !== 0) {
             //!== verificar se dois valores são diferentes e não iguais.
            return a / b;
        } else {
            throw new Error("Divisão por zero não é permitida.");
        }
    }
}