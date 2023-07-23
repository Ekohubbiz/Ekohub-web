import Axios from 'axios';

const Auth = {
  setToken: (token, refreshToken) => {
    localStorage.setItem('token', token);
    localStorage.setItem('refresh_token', refreshToken);
    Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  getToken: () => {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    return token;
  },
  getRefreshToken: () => {
    const token = localStorage.getItem('refresh_token');
    if (token) {
      return token;
    }
    return false;
  },
  isAuthenticated: () => {
    const token = localStorage.getItem('token');
    if (token === 'null' || token === 'undefined' || !token) {
      return false;
    }
    if (token) return true;
    return false;
  },
  destroyToken: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    delete Axios.defaults.headers.common.Authorization;
    return true;
  },
  setUser: (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  },
  getUser: () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  },
};

export default Auth;
