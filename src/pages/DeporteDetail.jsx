/* 8️⃣ *** COMPONENTE DeporteDetail *** 8️⃣

Implemente o componente DeporteDetail. Neste exercício, você terá que renderizar as diferentes propriedades do esporte.
📢 Siga as instruções dos testes! 📢

REQUISITOS
🟢 Você precisará despachar uma action com o "id" do esporte quando o componente for montado. Em seguida, buscar essa informação do seu estado global.
🟢 Você deverá renderizar alguns dados do esporte correspondente.

IMPORTANTE
❗ Importe as actions como Object Modules, caso contrário, os testes não funcionarão!
❗ Este componente deve ser FUNCIONAL.
❗ Para obter o "id", você pode usar o useParams.
❗ NÃO fazer uma desestruturação dos hooks do React, você deve utilizá-los da seguinte forma:
- 'React.useState'
- 'React.useEffect'
*/

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './deporteDetail.css';

export default function DeporteDetail({ deporteDetail, getDeporteDetail }) {
  const { id } = useParams();

  useEffect(() => {
    // Despache a ação getDeporteDetail com o "id" do esporte aqui
    getDeporteDetail(id);
  }, [getDeporteDetail, id]);

  return <div className='detail'></div>;
}
