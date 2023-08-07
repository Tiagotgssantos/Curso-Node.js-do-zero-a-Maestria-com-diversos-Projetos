//conversor.js

module.exports={
    converterParaNumero(string){
        const numero = Number(string);
        if(isNaN(numero)){
            /*isNaN é uma função em JavaScript que significa "is Not-a-Number" 
            (não é um número). Essa função é usada para verificar se um valor 
            não pode ser interpretado como um número. */
            
            throw new Error(`Não foi possivel transforma ${numero} em string`);
        }

        return numero;
    }
}