//verificadorPrimo.js

module.exports={
    verificadorPrimo(numero){
        try{
            if(numero <= 1){
                throw new Error("Os números menores ou igual a 1 não são primos.");
            }

            for(let i = 2;i < numero; i++){
                if(numero % i === 0){
                /*estamos usando a expressão numero % i para calcular o resto da divisão 
                entre numero e i. */
                    return false;
                }
            }
            return true
        }catch (error){
            throw new Error(`Erro na verificação: ${error.message}`);
        }
    }
}