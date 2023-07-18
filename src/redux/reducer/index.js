/* 4️⃣ *** REDUCER *** 4️⃣ /
/ Importe os action-types aqui. */

import {
  GET_ALL_DEPORTES,
  GET_DEPORTE_DETAIL,
  CREATE_DEPORTE,
  DELETE_DEPORTE,
} from '../actions';

const initialState = {
  deportes: [],
  deporteDetail: {},
};

/*
  Neste exercício, você terá que criar os casos de um reducer para gerenciar as informações do seu estado global.
  
  📢 Siga as instruções dos testes! 📢
  
  REQUISITOS
  🟢 Crie um case padrão (default) que retorne o estado global sem alterações.
  🟢 Crie um case em que, dentro do estado "deportes", sejam guardados todos os esportes.
  🟢 Crie um case em que, dentro do estado "deporteDetail", seja guardado o detalhe de um esporte.
  🟢 Crie um case em que, dentro do estado "deportes", seja adicionado um novo esporte.
  [DICA]: você pode usar o spread operator.
  🟢 Crie um case em que, dentro do estado "deportes", seja removido o esporte cujo ID seja igual ao recebido.
  */

const rootReducer = (state = initialState, action) => {
  // Seu código:
  switch (action.type) {
    case GET_ALL_DEPORTES:
      return {};
    case GET_DEPORTE_DETAIL:
      return {};
    case CREATE_DEPORTE:
      return {};
    case DELETE_DEPORTE:
      return {};

    default:
      return state;
  }
};

export default rootReducer;
