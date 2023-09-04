const fs = require('fs');

//se a pasta não existir
if(!fs.existsSync('./minhapasta')){
    console.log('não existe!');

//criando pasta
fs.mkdirSync('minhapasta');
}else if(fs.existsSync('./minhapasta')){
    //caso a pasta exista
    console.log('Existe!');
}


