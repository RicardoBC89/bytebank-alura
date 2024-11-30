import { TipoTransacao } from "./TipoTansacao.js";
import { Transacao } from "./Transacao.js";

let saldo: number = JSON.parse(localStorage.getItem("saldo")) || 0;

const transacoes: Transacao[] = JSON.parse(localStorage.getItem("transacoes"), (key: string, value: string) => {
    if (key === "data") {
        return new Date(value);
    }
    return value;
}) || [];

const debitar = (valor: number): void => {
    if (valor <= 0) {
        throw new Error("Valor deve ser maior que zero")
    } 
    if (valor > saldo) {
        throw new Error("Saldo insuficiente")
    }
    saldo -= valor;   
    localStorage.setItem("saldo", saldo.toString());
}

const depositar = (valor: number): void => {
    if (valor <= 0) {
        throw new Error("Valor deve ser maior que zero")
    }
    saldo += valor;
    localStorage.setItem("saldo", saldo.toString());
}
 
const Conta = {
    getSaldo() {
        return saldo;
    },

    getDataAcesso(): Date {
        return new Date();
    },

    registrarTransacao(novaTransacao: Transacao): void {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            depositar(novaTransacao.valor);
        } else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            debitar(novaTransacao.valor);
        } else {
            // essa throw new Error faz com que ao cair nesse erro, mesmo que a funçõ seja chamada em outro lugar ela para neste ponto;
            throw new Error("Tipo de transação invalido")
            // Como tem o throw acima, a linha alert e return ficaram em redundancia
            //alert("Transação invalida");
            //return;
        } 

        transacoes.push(novaTransacao);
        localStorage.setItem("transacoes", JSON.stringify(transacoes));
    }
}

export default Conta;