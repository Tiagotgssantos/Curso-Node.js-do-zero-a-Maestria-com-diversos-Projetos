const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout,
});
/*Nesse código, você está importando o módulo readline e 
usando o método createInterface para criar uma instância 
da interface de leitura. Os argumentos passados para 
createInterface são um objeto de configuração que 
especifica de onde a entrada (input) deve ser lida e 
para onde a saída (output) deve ser escrita. */



readline.question("Qual a sua linguagem preferida?", (language) =>{
    if(language === 'Python'){
        console.log('Otima escolha!');
    }else{
        console.log(`A minha linguagem favorita é ${language}`);
    }
    readline.close();
});


