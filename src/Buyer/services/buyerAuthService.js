import {
  BehaviorSubject
} from 'rxjs';

import {
  config
} from './../../config';
import {
  handleResponse
} from './../helpers/handleResponse';

const currentBuyerSubject = new BehaviorSubject(JSON.parse(window.localStorage.getItem('buyer')));

export const buyerAuthService = {
  login,
  logout,
  currentBuyer: currentBuyerSubject.asObservable(),
  get currentBuyerValue() {
    return currentBuyerSubject.value
  }
};



function login(_email, _password) {
  var raw = JSON.stringify({
    "_email": _email,
    "_password": _password
  });

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  return fetch(`${config.apiUrl}/buyers/authenticate`, requestOptions)
    .then(response => response.json())
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      window.localStorage.setItem('buyer', JSON.stringify(user));
      currentBuyerSubject.next(user);
      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  window.localStorage.removeItem('currentBuyer');
  currentBuyerSubject.next(null);
}
