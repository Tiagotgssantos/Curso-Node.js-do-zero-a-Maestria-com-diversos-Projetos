// nome

console.log(process.argv);
/*process ele mostra o execultavel do node 
o arquivo que esta execultando e o argumento 

explicando os indices:
indice [0] 'C:\\Program Files\\nodejs\\node.exe',

indice [1]  'C:\\Users\\Adm\\Desktop\\video aulas de 
cursos\\Node.js do zero a Maestria com diversos Projetos
\\2_Fundamentos\\24_Ler_argumentos\\index.js',

indice [2]  'nome=Tiago',

indice [3] 'idade=32'

*/

const args = process.argv.slice(2);
/*vai resgatar o segundo indice
indice [2]  'nome=Tiago',
*/

console.log(args);

const nome = args[0].split('=')[1];
/*Apos a impressão do  console.log(args);
so vai ter o 'nome=Tiago',
dessa forma ele sera considerado como o indice [0] 
e com o split('=') ele divide a string apos ver o =
dividindo assim:
    idice[0]nome  indice[1]Tiago,
*/
console.log(nome);

//mesma logica para adicionar idade
const idade = args[1].split('=')[1];


console.log(idade);

console.log(`O nome dele é ${nome} e ele tem ${idade} anos`);
