"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getElementoSaldo = exports.atualizarSaldo = exports.getSaldo = void 0;
const formatters_js_1 = require("../utils/formatters.js");
const FormatoData_js_1 = require("../types/FormatoData.js");
let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoDataAcesso != null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = (0, formatters_js_1.formatarData)(dataAcesso, FormatoData_js_1.FormatoData.DATA_COMPETA);
}
const getSaldo = () => {
    return saldo;
};
exports.getSaldo = getSaldo;
const atualizarSaldo = (novoSaldo) => {
    saldo = novoSaldo;
    if (elementoSaldo != null) {
        elementoSaldo.textContent = (0, formatters_js_1.formatarMoeda)(saldo);
    }
};
exports.atualizarSaldo = atualizarSaldo;
(0, exports.atualizarSaldo)(saldo);
const getElementoSaldo = () => {
    return elementoSaldo;
};
exports.getElementoSaldo = getElementoSaldo;
