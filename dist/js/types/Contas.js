"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TipoTansacao_js_1 = require("./TipoTansacao.js");
let saldo = 3000;
const Conta = {
    getSaldo() {
        return saldo;
    },
    getDataAcesso() {
        return new Date();
    },
    registrarTransacao(novaTransacao) {
        if (novaTransacao.tipoTransacao == TipoTansacao_js_1.TipoTransacao.DEPOSITO) {
            saldo += novaTransacao.valor;
        }
        else if (novaTransacao.tipoTransacao == TipoTansacao_js_1.TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTansacao_js_1.TipoTransacao.PAGAMENTO_BOLETO) {
            saldo -= novaTransacao.valor;
        }
        else {
            alert("Transação invalida");
            return;
        }
    }
};
exports.default = Conta;
