const verificadorPrimo = require('./verificadorPrimo');

const numero = 17;

try{
    const ehPrimo = verificadorPrimo.verificadorPrimo(numero);

    if(ehPrimo){
        console.log(`${numero} é um número Primo.`)
    }else{
        console.log(`${numero} não é um número Primo`)
    }
} catch (error){
    console.error("Ocorreu um erro:", error.message);
}