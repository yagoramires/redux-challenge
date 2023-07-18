/* 6️⃣ *** COMPONENTE CreateDeporte *** 6️⃣

Implemente o componente CreateDeporte. Ele consistirá em um formulário controlado com estados do React.
📢 Siga as instruções dos TESTES! 📢

REQUISITOS
🟢 Aqui você terá que renderizar uma série de elementos HTML com diferentes atributos e informações dentro.
🟢 Deve gerenciar cada um dos campos de entrada do seu formulário através de um estado local chamado "input".
🟢 As informações do formulário devem ser enviadas ao estado global quando ocorrer um envio (submit).
🟢 Deve-se lidar com os erros que os campos de entrada do formulário podem ter.

IMPORTANTE
❗ Importe as actions como Object Modules, caso contrário, os testes não funcionarão!
❗ Este componente deve ser FUNCIONAL.
❗ Para fins práticos, o campo de entrada para "ligas destacadas" será apenas uma string e será chamado de "liga destacada".
❗ Você pode implementar o tratamento de erros da maneira que preferir! Apenas lembre-se de renderizar o erro apropriado em cada caso.
❗ NÃO fazer uma desestruturação dos hooks do React, você deve utilizá-los da seguinte forma:
- 'React.useState'
- 'React.useEffect'
*/

import { useState } from 'react';

export default function CreateDeporte() {
  const [input, setInput] = useState({
    nombre: '',
    deporte: '',
    ligaDestacada: '',
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Despache a ação createDeporte aqui
    // createDeporte(input);
  };

  return (
    <>
      <h1>Create Deporte</h1>
      <form onSubmit={handleSubmit}>
        {/* Renderize os inputs do formulário aqui */}
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}
