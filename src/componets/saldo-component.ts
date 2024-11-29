import { formatarMoeda, formatarData } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";

let saldo: number = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;


if (elementoDataAcesso != null) {
    const dataAcesso: Date = new Date();
   elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DATA_COMPETA);
}

export const getSaldo = (): number => {
    return saldo
}



export const atualizarSaldo = (novoSaldo: number): void => {
    saldo = novoSaldo;
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(saldo);
        }       
}
atualizarSaldo(saldo);

export const getElementoSaldo = (): HTMLElement => {
    return elementoSaldo
}