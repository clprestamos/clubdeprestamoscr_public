import request from 'superagent';
import jwtDecode from 'jwt-decode';

export function removeToken() {
  window.sessionStorage.clear();
}
export function setToken(token, userData) {
  const currentToken = window.sessionStorage.getItem('token');
  if (!currentToken) {
    window.sessionStorage.setItem('token', token);
    window.sessionStorage.setItem('userData', JSON.stringify(userData));
  }
}
export function validateToken() {
  const token = window.sessionStorage.getItem('token');
  if (token) {
    const decodedToken = jwtDecode(token);
    if (new Date(decodedToken.exp * 1000) > new Date()) {
      return decodedToken;
    }
    removeToken();
  }
  return false;
}
export function getToken() {
  const token = window.sessionStorage.getItem('token');
  return token;
}
export function getUserAuth() {
  const userData = window.sessionStorage.getItem('userData');
  return JSON.parse(userData);
}
export function post({
  endpoint,
  payload,
  authorization,
  requiredToken,
}) {
  const requestPost = (resolve, reject) => {
    request.post(`http://localhost:3000/${endpoint}`)
      .send(payload)
      .set({ authorization })
      .then((response) => {
        resolve(response);
      })
      .catch(err => reject(err));
  };
  return new Promise((resolve, reject) => {
    if (requiredToken) {
      try {
        const isTokenValid = validateToken();
        if (isTokenValid) {
          requestPost(resolve, reject);
        } else {
          reject(new Error('Token expiró'));
        }
      } catch (err) {
        reject(err);
      }
    } else {
      requestPost(resolve, reject);
    }
  });
}
export function get({
  endpoint,
}) {
  const authorization = getToken();
  return new Promise((resolve, reject) => {
    request.get(`http://localhost:3000/${endpoint}`)
      .set({ authorization })
      .then((response) => {
        resolve(response);
      })
      .catch(err => reject(err));
  });
}
export function patch({
  endpoint,
  payload,
}) {
  const authorization = getToken();
  return new Promise((resolve, reject) => {
    request.patch(`http://localhost:3000/${endpoint}`)
      .send(payload)
      .set({ authorization })
      .then((response) => {
        resolve(response);
      })
      .catch(err => reject(err));
  });
}
