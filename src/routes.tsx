import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home';
import { Doacao } from './pages/Doacao';
import { Ongs } from './pages/Ongs';
import { Adotar } from './pages/Adotar';
import { Login } from './pages/Login';

export const AppRoutes = () => {
    return (
        <BrowserRouter basename="/AnimalCare"> 
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/doacao' element={<Doacao/>} />
                <Route path='/ongs' element={<Ongs/>} />
                <Route path='/adotar' element={<Adotar/>} />
                <Route path='/login' element={<Login/>} />

                <Route path='*' element={<Navigate to ='/' />}/>     
            </Routes>
        </BrowserRouter>
    );
}