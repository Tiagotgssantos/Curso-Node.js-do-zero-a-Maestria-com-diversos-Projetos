const url = require('url');
//importando o módulo
const address = 'http://www.meusite.com.br/catalog?produtos=cadeira';
//endereço que vamos trabalhar 
const parsedUrl = new url.URL(address);
//url decomposta mais o metodo.


console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);
console.log(parsedUrl.searchParams);
console.log(parsedUrl.searchParams.get('produtos'));
