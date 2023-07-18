/* 3️⃣ *** ACTIONS *** 3️⃣ */

import axios from 'axios';

// 📢 Você pode utilizar o axios, se desejar, apenas precisa importá-lo 📢
// 📢 Lembre-se de RETORNAR as solicitações feitas pelos seus action-creators 📢
// Ex: return fetch(...) ou return axios(...)

export const GET_ALL_DEPORTES = 'GET_ALL_DEPORTES';
export const GET_DEPORTE_DETAIL = 'GET_DEPORTE_DETAIL';
export const CREATE_DEPORTE = 'CREATE_DEPORTE';
export const DELETE_DEPORTE = 'DELETE_DEPORTE';

// 🟢 getAllDeportes:
// Esta função deve fazer uma solicitação ao Back-End. Em seguida, despachar uma action com os dados recebidos.
// End-Point: 'http://localhost:3000/deportes'.

export const getAllDeportes = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3000/deportes');
      dispatch({
        type: GET_ALL_DEPORTES,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      // Tratar o erro, se necessário
    }
  };
};

// 🟢 getDeporteDetail:
// Esta função deve fazer uma solicitação ao Back-End. Lembre-se de que ela deve receber a variável "id" como parâmetro.
// Em seguida, despache uma action com os dados recebidos.
// End-Point: 'http://localhost:3000/deportes/:id'.

export const getDeporteDetail = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3000/deportes/${id}');
      dispatch({
        type: GET_DEPORTE_DETAIL,
        payload: response.data,
      });
    } catch (error) {
      // Tratar o erro, se necessário
    }
  };
};

// 🟢 createDeporte:
// Esta función debe recibir una variable "deportes" por parámetro.
// Luego retornar una action que, en su propiedad payload:
//    - haga un spread operator de la variable deportes, para copiar todo su contenido.
//    - tenga una nueva propiedad "id" igual a la variable de abajo, pero con un incremento +1.
// Descomenta esta variable cuando la necesites.
// let id = 1;

export const createDeporte = (deportes) => {
  return {
    type: CREATE_DEPORTE,
    payload: {
      ...deportes,
    },
  };
};

// 🟢 deleteDeporte:
// Esta função deve retornar uma action. Em sua propriedade "payload", você guardará o ID recebido como parâmetro.
export const deleteDeporte = (id) => {
  return {
    type: DELETE_DEPORTE,
    payload: id,
  };
};
