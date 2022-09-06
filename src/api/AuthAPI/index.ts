import { LoginAPIInstance, DefaultAPIInstance } from '@/api';

export const AuthAPI = {
  /**
   *
   *@param login
   *@param password
   *@returns {Promise<AxiosResponse<any>>}
   */

  login(login: string, password: string) {
    const url = '/login';
    const data = { login, password };
    return LoginAPIInstance.post(url, data);
  },

  /**
   *
   *@returns {Promise<AxiosResponse<any>>}
   */

  logout() {
    const url = '/logout';
    return LoginAPIInstance.post(url);
  },
};
