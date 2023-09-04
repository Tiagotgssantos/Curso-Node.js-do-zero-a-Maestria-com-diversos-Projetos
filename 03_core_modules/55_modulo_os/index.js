const os = require('os');

//quantos cpus tem o servidor
console.log(os.cpus());

//quanto de memoria livre tem na maquina
console.log(os.freemem());

//qual o diretorio pricipal
console.log(os.homedir());

//qual o sistema operacional
console.log(os.type());