
import { Action, Dispatch } from "redux";

//disparador da mudança de estado
export const depositar = (quantia: number) => {
    return(dispatch: Dispatch<Action>)=>{
        dispatch({
            type: "depositar",
            payload: quantia
        });
    }
}

export const sacar = (quantia: number) => {
    return(dispatch: Dispatch<Action>)=>{
        dispatch({
            type: "sacar",
            payload: quantia
        });
    }
}

export const falido = (quantia: number) => {
    return(dispatch: Dispatch<Action>)=>{
        dispatch({
            type: "falido",
            payload: quantia
        });
    }
}

