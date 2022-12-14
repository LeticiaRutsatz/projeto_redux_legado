import { combineReducers } from "redux";
import { meuReducer } from "./meuReducer";

//combino todas as minhas reducers para ficarem disponiveis na aplicacao
const reducers = combineReducers ({banco: meuReducer});

//exporto a reducers
export default reducers;

//padrão do reducer legado para exportar o estado
export type State = ReturnType<typeof reducers>;
