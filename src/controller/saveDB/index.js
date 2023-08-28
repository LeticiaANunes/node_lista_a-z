import { CommitDB } from "../../services/save.js";

export const ControllerInsert = (data) => {

    // Se data é true, chama controller para salvar,
    // senão, printa para usuário e retorna para o loop
    if(data) {
        CommitDB(
            {
            "nome": data
            }
        )
    } else {
        console.log("\n \x1b[93;41m -------- ERRO --------- \x1b[0m")
        return console.log(" \x1b[33m Informe um nome \x1b[0m \n")
    }

}