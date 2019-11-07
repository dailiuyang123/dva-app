import request from '../utils/request';

export function getUser() {
    return request('http://localhost:8080/users/data');
  }