//modulos externos
const inquirer = require('inquirer');
const chalk = require('chalk');

//Core modules
const fs = require('fs');

operation();

function operation() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'O que você deseja fazer',
                choices: [
                    'Criar conta',
                    'Consultar Saldo',
                    'Depositar',
                    'Sacar',
                    'Sair'
                ],
            },
        ])
        .then((answer) =>{
            const action = answer['action'];
           if(action === 'Criar conta'){
            createaAccount();
           }else if(action === 'Depositar'){
            deposit();
           }else if(action === 'Consultar Saldo'){

           }else if(action === 'Sacar'){

           }else if(action === 'Sair'){
            console.log(chalk.bgBlue.black('Obrigado por usar o Account!'));
            process.exit();
            //vai encerrar o programa.
           }
        })
        .catch((err) => console.log(err));
}

// criando conta 
function createaAccount(){
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'));
    console.log(chalk.green('Defina as opções da sua conta a seguir'));

    buildAccount();
    /*chamando a função para 
    digitar o nome da conta */

}

//criando a conta de fato:
function buildAccount(){
    inquirer
    .prompt([
        {
            name: 'accountName',
            message: 'Digite o nome para a sua conta:'
        }
    ])
    .then((answer)=>{
       const accountName = answer['accountName'];

       console.info(accountName);

       if(!fs.existsSync('accounts')){
        //se o diretorio accounts não exitir.
        fs.mkdirSync('accounts')
        //crie o diretorio accounts
       }
       //criado o banco de dedados

       if(fs.existsSync(`accounts/${accountName}.json`)){
        /*vamos ver se o nome da conta existe, no diretorio accounts
        que foi criado*/
        //caso exista ele não deixa proceguir
        //dessa forma tambem salvaremos em arquivo .json

        console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome!'));
        //mensagem de erro caso a conta ja exista.
        /*caso ja exitas será direcionado a criar o
        nome da conta com a função  
        buildAccount(); assim voltando ao inicio
        */
        buildAccount();
        return
       }


       /*Caso tenha passado pela validação 
       vamos a criação da conta juntamento como arquivo json */
       fs.writeFileSync(
        `accounts/${accountName}.json`,
        '{"balance":0}',
        //conteudo do arquivo json seguindo os padroões do json
        function(err){
            console.log(err);
        },
       )

       console.log(chalk.green('Parabéns, a sua conta foi criada!'));

       operation();
    })
    .catch((err) => console.log(err));
}

//função de deposito
function deposit(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ])
    .then((answer)=>{
        const accountName = answer['accountName']

        //verificação se a conta existe
        if(!checkAccount(accountName)){
            return deposit();
        }

    })
    .catch(err => console.log(err))
}

function checkAccount(accountName){
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('Esta conta não existe, escolha outro nome!'));
        return false;
    }

    return true;
}