import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home';
// import { Doacao } from './pages/Doacao';
import { Ongs } from './pages/Ongs';
import { Adotar } from './pages/Adotar';
import { Login } from './pages/Login';
import { CreateAccount } from './pages/CreateAccount';

// import PrivateRoute from './components/PrivateRoute'

// Footer
import { Sobre } from './pages/Sobre';
import { Contato } from './pages/Contato';
import { TermosDeUso } from './pages/TermosDeUso';

export const AppRoutes = () => {
    return (
        <BrowserRouter basename="/AnimalCare">
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/ongs' element={<Ongs />} />
                <Route path='/adotar' element={
                    <Adotar />
                } />

                <Route path='/login' element={<Login />} />
                <Route path='/create-account' element={<CreateAccount />} />

                <Route path='/sobre' element={<Sobre />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='/termos-de-uso' element={<TermosDeUso />} />

                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    );
}