"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderizarSaldo = void 0;
const formatters_js_1 = require("../utils/formatters.js");
const FormatoData_js_1 = require("../types/FormatoData.js");
const Contas_js_1 = require("../types/Contas.js");
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoDataAcesso != null) {
    elementoDataAcesso.textContent = (0, formatters_js_1.formatarData)(Contas_js_1.default.getDataAcesso(), FormatoData_js_1.FormatoData.DATA_COMPETA);
}
const renderizarSaldo = () => {
    if (elementoSaldo !== null) {
        elementoSaldo.textContent = (0, formatters_js_1.formatarMoeda)(Contas_js_1.default.getSaldo());
    }
};
exports.renderizarSaldo = renderizarSaldo;
(0, exports.renderizarSaldo)();
const SaldoComponent = {
    atualizar() {
        (0, exports.renderizarSaldo)();
    },
};
exports.default = SaldoComponent;
