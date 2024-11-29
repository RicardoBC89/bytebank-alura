"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatarData = exports.formatarMoeda = void 0;
const FormatoData_js_1 = require("../types/FormatoData.js");
const formatarMoeda = (valor) => {
    return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
};
exports.formatarMoeda = formatarMoeda;
const formatarData = (data, formato = FormatoData_js_1.FormatoData.PADRAO) => {
    if (formato === FormatoData_js_1.FormatoData.DATA_COMPETA) {
        return data.toLocaleDateString("pt-br", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    }
    else if (formato === FormatoData_js_1.FormatoData.DIA_MES) {
        return data.toLocaleDateString("pt-br", {
            day: "2-digit",
            month: "2-digit"
        });
    }
    return data.toLocaleDateString("pt-br");
};
exports.formatarData = formatarData;
