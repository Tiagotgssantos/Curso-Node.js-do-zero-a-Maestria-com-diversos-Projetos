const path = require('path');

//path absoluto
console.log(path.resolve('teste.txt'));

//forma um path
const midFolder = 'relatorios';
const fileName = 'tiago.txt';

const finalPath = path.join('/', 'arquivos', midFolder, fileName);

console.log(finalPath);
