/* eslint-disable react/prop-types */
/* 7️⃣ *** COMPONENTE DeporteCard *** 7️⃣

Implemente o componente DeporteCard.
📢 Siga as instruções dos testes! 📢

REQUISITOS
🟢 Você terá que renderizar uma série de tags HTML que incluam texto e propriedades.
🟢 Você terá que despachar uma action para excluir um esporte específico.

IMPORTANTE
❗ Este componente deve ser FUNCIONAL.
❗ Importe as actions como Object Modules, caso contrário, os testes não funcionarão!
*/

import './desporteCard.css';

export default function DeporteCard({ deporte, deleteDeporte }) {
  const handleDelete = () => {
    // Despache a ação deleteDeporte aqui
    deleteDeporte(deporte.id);
  };

  return (
    <div className='card'>
      {/* Renderize as informações do deporte aqui */}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
