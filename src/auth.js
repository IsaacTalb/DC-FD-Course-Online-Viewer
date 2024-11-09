import api from './api';

export const login = async (identifier, password) => {
  try {
    const response = await api.post('/auth/local', {
      identifier,
      password,
    });
    localStorage.setItem('token', response.data.jwt);
    return response.data.user;
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
};
