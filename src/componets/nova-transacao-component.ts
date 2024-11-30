import { TipoTransacao } from "../types/TipoTansacao.js";
import { Transacao } from "../types/Transacao.js";
import SaldoComponent from "./saldo-component.js";
import Conta from "../types/Contas.js";

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
if (elementoFormulario !== null) {
    elementoFormulario.addEventListener("submit", function(event) {
        try {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação");
        return;
    }

    const inputTipoTransacao = elementoFormulario.elements.namedItem("tipoTransacao") as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

    let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);
   

    const novaTransacao: Transacao = {
        valor: valor,
        data: data,
        tipoTransacao: tipoTransacao,
    }

    SaldoComponent.atualizar();

    Conta.registrarTransacao(novaTransacao);
    
    elementoFormulario.reset();
}
catch(error) {
    alert(error.message)
}
})};
