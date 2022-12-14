import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Depositar } from '../pages/depositar';
import { Falido } from '../pages/falido';
import { Sacar } from '../pages/sacar';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/falido' element={<Falido />}/>
                <Route path='/sacar' element={<Sacar />}/>
                <Route path='/' element={<Depositar />}/>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }