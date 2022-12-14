import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actions} from "../../store/actions";
import { State } from '../../store/reducers';


function Depositar() {
    const dispatch = useDispatch();

    const {depositar, sacar} = bindActionCreators(actions, dispatch);

    const quantia = useSelector((state: State)=> state.banco)
    return (
        <>
            <h1>{quantia}</h1>
            <button onClick={()=>sacar(50)}>Sacar</button>
            <button onClick={()=>depositar(100)}>Depositar</button>
        </>
    )
}

export { Depositar }