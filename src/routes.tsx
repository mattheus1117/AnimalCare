import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home';
import { Doacao } from './pages/Doacao';
import { Ongs } from './pages/Ongs';
import { Adotar } from './pages/Adotar';
import { Login } from './pages/Login';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/AnimalCare/' element={<Home/>}/>
                <Route path='/AnimalCare/doacao' element={<Doacao/>} />
                <Route path='/AnimalCare/ongs' element={<Ongs/>} />
                <Route path='/AnimalCare/adotar' element={<Adotar/>} />
                <Route path='/AnimalCare/login' element={<Login/>} />

                <Route path='*' element={<Navigate to ='/' />}/>     
            </Routes>
        </BrowserRouter>
    );
}