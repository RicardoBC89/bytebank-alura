import Conta from "../types/Contas.js";
import { FormatoData } from "../types/FormatoData.js";
import { GrupoTransacao } from "../types/GrupoTransacao.js";
import { formatarMoeda, formatarData } from "../utils/formatters.js";

const elementoRegistroTrasacoesExrtrato: HTMLElement = document.querySelector(".extrato .registro-transacoes");

const renderizarExtrato = (): void => {
    const gruposTrasacoes: GrupoTransacao[] = Conta.getGruposTransacoes();
    elementoRegistroTrasacoesExrtrato.innerHTML = "";
    let htmlRegistroTrasacoes: string = "";

    for( let gruposTransacao of gruposTrasacoes) {
        let htmlTransacaoItem: string = "";
        for(let  transacao of gruposTransacao.transacoes) {
            htmlTransacaoItem += `
                <div class ="transacao-item">
                    <div class="transacao-info">
                        <span class="tipo">${transacao.tipoTransacao}</span>
                        <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
                    </div>
                    <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
                </div>
            `;
        }

        htmlRegistroTrasacoes += `
            <div class="transacoes-group">
                <strong class="mes-group>${gruposTransacao.label}</strong>
                ${htmlTransacaoItem}
            <div>
        `;
    }
    if(htmlRegistroTrasacoes === "") {
        htmlRegistroTrasacoes = "<div>Não há transações registradas </div>";
    }

    elementoRegistroTrasacoesExrtrato.innerHTML = htmlRegistroTrasacoes;
}
renderizarExtrato();

const ExtratoComponent = {
    atulizar(): void {
        renderizarExtrato();
    }
}

export default ExtratoComponent;


