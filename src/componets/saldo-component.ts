import { formatarMoeda, formatarData } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/Contas.js";

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

if (elementoDataAcesso != null) {
   elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DATA_COMPETA);
}

export const renderizarSaldo = (): void => {
    if (elementoSaldo !== null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
        }       
}
renderizarSaldo()

const SaldoComponent = {
    atualizar() {
        renderizarSaldo();
    },
};

export default SaldoComponent