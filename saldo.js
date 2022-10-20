var saldo = 0;

// gera codigo de acesso
function geraCodigo() {
    return Math.random();
}
// gera pop-up para copiar codigo facilmente
function geraBilhete() {
    window.prompt("Aqui está o seu código único de acesso!", geraCodigo());
}

// adiciona saldo na conta
function add6() {
    saldo =+ 6;
}
function add10() {
    saldo =+ 10;
}
function add25() {
    saldo =+ 25;
}
function add80() {
    saldo =+ 80;
}

// quanto o usuario tem a pagar
function pagar() {
    if (saldo == 6) {
        alert("A sua dívida de R$" + saldo + " foi paga com sucesso.\nTenha uma boa viagem!");
    }
    else if (saldo == 10) {
        alert("A sua dívida de R$" + saldo + " foi paga com sucesso.\nTenha uma boa viagem!");
    }
    else if (saldo == 25) {
        alert("A sua dívida de R$" + saldo + " foi paga com sucesso.\nTenha uma boa viagem!");
    }
    else {
        alert("A sua dívida de R$" + saldo + " foi paga com sucesso.\nTenha uma boa viagem!");
    }
}