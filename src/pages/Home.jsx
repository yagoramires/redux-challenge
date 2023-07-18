/*5️⃣ COMPONENTE Home ** 5️⃣

Implementar o componente Home. Ele deverá renderizar todos os Esportes (Cards) que contenham as informações consumidas diretamente do estado global do Redux.
📢 Siga as instruções dos testes! 📢

REQUISITOS
🟢 Você terá que conectar o componente com o estado global do Redux através de duas funções: mapStateToProps e mapDispatchToProps.
🟢 Você terá que renderizar uma série de tags HTML com informações dentro.
🟢 Você terá que mapear o seu estado global para depois renderizar suas informações utilizando o componente <deporteCard />.

IMPORTANTE
❗ Este componente deve ser de CLASSE.
❗ Importe as actions como Object Modules, caso contrário, os testes não funcionarão!
[Ej]: import * as actions from "./../../redux/actions/index";
*/

import './home.css';

export default function Home() {
  return (
    <div>
      {/* Mapeie o estado deportes e renderize as informações utilizando o componente DeporteCard */}
    </div>
  );
}
