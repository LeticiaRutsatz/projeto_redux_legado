//TIPOS
interface Depositar{
    type: "depositar",
    payload: number
}

interface Sacar{
    type: "sacar",
    payload: number
}

interface Falido{
    type: "falido",
    payload: number
}

type Action = Depositar | Falido | Sacar;

const estadoInicial = 0;

//reduce é uma funcao
//estado inicial + acao
export const meuReducer = (estado : number = estadoInicial, action : Action)=>{
    switch(action.type){
        case "depositar":
            return estado + action.payload;
        case "sacar":
            return estado - action.payload;
        case "falido":
            return 0;
            default: return estado;
    }
}






