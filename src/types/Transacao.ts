import { TipoTransacao } from "./TipoTansacao.js";

export type Transacao = {
    tipoTransacao: TipoTransacao;
    data: Date;
    valor: number
}