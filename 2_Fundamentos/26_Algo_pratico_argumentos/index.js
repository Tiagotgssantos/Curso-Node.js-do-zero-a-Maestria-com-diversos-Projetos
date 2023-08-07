//externo
const minimist = require('minimist');
// variavel com o mesmo nome do módulo.


//interno
const soma = require('./soma').soma;
//dessa forma eu ja pego a função soma

const args = minimist(process.argv.slice(2));

const a = parseInt(args["a"]);
const b = parseInt(args["b"]);
// com o parseInt converte para inteiros

soma(a, b);
/*o programa resgata dois argumentos o A e o B, e poderam ser passado 
dois argumentos que seram interpretados como inteiro e repassados a função e 
seram somados
*/