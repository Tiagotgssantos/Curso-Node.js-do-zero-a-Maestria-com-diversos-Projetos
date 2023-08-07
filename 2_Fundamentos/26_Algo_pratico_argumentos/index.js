//externo
const minimist = require('minimist');
// variavel com o mesmo nome do módulo.


//interno
const soma = require('./soma').soma;
//dessa forma eu ja pego a função soma

const args = minimist(process.argv.slice(2));
/*.slice(2) é usada para ignorar os dois primeiros 
elementos da matriz process.argv, que são os caminhos 
para o executável Node.js e para o próprio arquivo 
JavaScript. Isso deixa apenas os argumentos passados 
pelo usuário. */

const a = parseInt(args["a"]);
/*parseInt() é usado para converter o valor de args["a"] 
em um número inteiro. Isso é importante porque os valores 
extraídos de args são tratados como strings. */
const b = parseInt(args["b"]);
// com o parseInt converte para inteiros

soma(a, b);
/*o programa resgata dois argumentos o A e o B, e poderam ser passado 
dois argumentos que seram interpretados como inteiro e repassados a função e 
seram somados
*/