"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TipoTansacao_js_1 = require("../types/TipoTansacao.js");
const saldo_component_js_1 = require("./saldo-component.js");
const elementoFormulario = document.querySelector(".block-nova-transacao form");
if (elementoFormulario != null) {
    elementoFormulario.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert("Por favor, preencha todos os campos da transação");
            return;
        }
        const inputTipoTransacao = elementoFormulario.elements.namedItem("tipoTransacao");
        const inputValor = elementoFormulario.querySelector("#valor");
        const inputData = elementoFormulario.querySelector("#data");
        let tipoTransacao = inputTipoTransacao.value;
        let valor = inputValor.valueAsNumber;
        let data = new Date(inputData.value);
        let saldo = (0, saldo_component_js_1.getSaldo)();
        if (tipoTransacao == TipoTansacao_js_1.TipoTransacao.DEPOSITO) {
            saldo += valor;
        }
        else if (tipoTransacao == TipoTansacao_js_1.TipoTransacao.TRANSFERENCIA || tipoTransacao == TipoTansacao_js_1.TipoTransacao.PAGAMENTO_BOLETO) {
            saldo -= valor;
        }
        else {
            alert("Transação invalida");
            return;
        }
        (0, saldo_component_js_1.atualizarSaldo)(saldo);
        const novaTransacao = {
            valor: valor,
            data: data,
            tipoTransacao: tipoTransacao,
        };
        elementoFormulario.reset();
    });
}
;
