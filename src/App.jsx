/* 1️⃣ *** COMPONENTE APP *** 1️⃣

Implemente o componente App. Neste exercício, você terá que criar diferentes ROTAS para outros componentes.
Leve em conta os nomes e especificações de cada um!

REQUISITOS
🟢 O componente Nav deve ser renderizado em todas as rotas.
🟢 O componente Home deve ser renderizado na rota "/".
🟢 O componente DeporteDetail deve ser renderizado na rota "/deportes/:id".
🟢 O componente CreateDeporte deve ser renderizado na rota "/deportes/create".
*/

import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import CreateDeporte from './pages/CreateDeporte';
import DeporteDetail from './pages/DeporteDetail';
import Nav from './components/Nav';

import './App.css';

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/deportes/create' element={<CreateDeporte />} />
        <Route path='/deportes/:id' element={<DeporteDetail />} />
      </Routes>
    </>
  );
}
