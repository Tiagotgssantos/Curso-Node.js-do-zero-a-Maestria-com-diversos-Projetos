const chalk = require('chalk');

const nota = 6;

if (nota >= 7){
    console.log(chalk.green('Parabens! Vocé esta aprovado!'));
}else{
    console.log(chalk.bgRed.bold('Você precisa fazer a prova de recuperação'));
    //chalk.bgRed = adicionando um background vermelho
    //chalk.bgRed.black = o black esta sendo usado para mudar a cor da letra
    //chalk.bgRed.bold = bold para deixa em negrito
}
