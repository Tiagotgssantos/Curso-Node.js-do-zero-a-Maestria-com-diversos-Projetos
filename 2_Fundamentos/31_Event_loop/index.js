function a(){
    console.log('Executando a()');
}

function b(){
    console.log('Executando b()');
}

function c(){
    console.log('Executando c()');
    a();
    b();
}

c();
/*Podemos fazer com que a função c execute 
a função A e B também */
//O event loop vai fazer com que seja executado
//nessa ordem 