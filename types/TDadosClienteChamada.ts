import { TClient } from "./TClient";
import { TLevels } from "./TLevels";




export type TDadosClienteChamada = {
    dados: {
        _idUser:string,
        levelUser:TLevels,
        nameUser:string,
        client: TClient
        }
}