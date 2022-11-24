var saldo = 0;

function getSaldo() {
    document.getElementById("saldo").innerHTML = "Finalize o pagamento de sua compra de R$" + saldo + ".0";
}
function emProgresso() {
    alert("Em progresso...")
}

function statusBilhete() {
    document.getElementById("status-bilhete").innerHTML = "Status do bilhete: ATIVO";
}

// gera codigo de acesso
function geraCodigo() {
    return Math.random() * 100000000000000000;
}
// gera pop-up para copiar codigo facilmente
function geraBilhete() {
    window.prompt("Aqui está o seu código único de acesso!", geraCodigo());
}

// adiciona saldo na conta
function add6() {
    saldo += 6;
    document.getElementById("saldo").innerHTML = "Saldo: R$" + saldo + ".0";
}
function add10() {
    saldo += 10;
    document.getElementById("saldo").innerHTML = "Saldo: R$" + saldo + ".0";
}
function add25() {
    saldo += 25;
    document.getElementById("saldo").innerHTML = "Saldo: R$" + saldo + ".0";
}
function add80() {
    saldo += 80;
    document.getElementById("saldo").innerHTML = "Saldo: R$" + saldo + ".0";
}

// quanto o usuario tem a pagar
function pagar() {
        alert("A sua dívida de R$" + saldo + " foi paga com sucesso.\nTenha uma boa viagem!");
}