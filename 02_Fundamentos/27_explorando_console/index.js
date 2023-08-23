const x = 10;
const y = "Tiago";
const z = [1, 2];

//impressão de mais de um valor
console.log(x, y, z);
/*Neste exemplo, a vírgula é usada para 
separar e listar as variáveis x, y e z 
como argumentos da função console.log(). 
Cada valor é exibido no console e separado 
por um espaço. Isso é útil para verificar 
os valores das variáveis e depurar seu código 
durante o desenvolvimento. */



//Contagem de impressões
//em um loop ele contaria quantas vezes foi impresso 
console.count(`O valor de x é: ${x}, contagem:`);
console.count(`O valor de x é: ${x}, contagem:`);
console.count(`O valor de x é: ${x}, contagem:`);
console.count(`O valor de x é: ${x}, contagem:`);
/*A interpolação torna o código mais legível e evita 
a concatenação manual de strings e variáveis, o que 
pode se tornar confuso e propenso a erros. Além disso, 
você pode incluir expressões mais complexas dentro do 
${} para calcular valores ou realizar operações antes 
de inserir o resultado na string interpolada. */



//variável entre string
console.log("O nome é %s, ele é programador", y);
//%s Eu informo o dado que eu quero imprimir depois da virgula


//limpar o console
setInterval(()=>{
    console.clear();
},2000);
//a cada 2 segundos ele limpa o console








