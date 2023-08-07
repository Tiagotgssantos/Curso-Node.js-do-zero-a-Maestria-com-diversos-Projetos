const minimist = require('minimist');
// variavel com o mesmo nome do módulo.

const args = minimist(process.argv.slice(2));
//slice o segundo argumento

console.log(args);

const nome = args ['nome'];
const profissao = args['profissao'];

console.log(nome, profissao);

console.log(`O nome dele é ${nome} e a profissão dele é ${profissao}`);
