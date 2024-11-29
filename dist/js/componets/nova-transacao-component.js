"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const saldo_component_js_1 = require("./saldo-component.js");
const Contas_js_1 = require("../types/Contas.js");
const elementoFormulario = document.querySelector(".block-nova-transacao form");
if (elementoFormulario !== null) {
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
        const novaTransacao = {
            valor: valor,
            data: data,
            tipoTransacao: tipoTransacao,
        };
        saldo_component_js_1.default.atualizar();
        Contas_js_1.default.registrarTransacao(novaTransacao);
        elementoFormulario.reset();
    });
}
;
