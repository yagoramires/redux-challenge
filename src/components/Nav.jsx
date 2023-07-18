/* 2️⃣ *** COMPONENTE NAV *** 2️⃣

Implemente o componente Nav. Neste exercício, você terá que associar duas tags <Link to='' /> a elementos distintos.

REQUISITOS
🟢 O primeiro <Link> deve direcionar para "/" com o texto "Home".
🟢 O segundo <Link> deve direcionar para "/deportes/create" com o texto "Create Deporte".

IMPORTANTE
❗ Este componente deve ser FUNCIONAL.
❗ Certifique-se de colocar corretamente a palavra 'deporte' ou 'deportes' nos casos requeridos.
*/

import { Link } from 'react-router-dom';
import './nav.css';

export default function Nav() {
  return (
    <div className='nav'>
      <Link to='/'>Home</Link>
      <Link to='/deportes/create'>Create Deporte</Link>
    </div>
  );
}
