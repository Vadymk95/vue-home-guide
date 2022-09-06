import { Commit } from 'vuex';
import { AuthAPI } from '@/api/AuthAPI';
import { IAuthState } from '@/models/State';
import { DefaultAPIInstance } from '../../api/index';

type UserDataType = { login: string; password: string };
type CommitType = { commit: Commit };

export const authModule = {
  state() {
    return {
      credentials: {
        token: localStorage.getItem('token') || null,
        userRole: localStorage.getItem('userRole') || null,
      },
    };
  },
  getters: {
    getUserRole: (state: IAuthState) => state.credentials.userRole,
  },
  mutations: {
    setToken(state: IAuthState, token: string | null) {
      state.credentials.token = token;
      localStorage.setItem('token', token as '');
    },
    setUserRole(state: IAuthState, role: string | null) {
      state.credentials.userRole = role;
      localStorage.setItem('userRole', role as '');
    },
    deleteToken(state: IAuthState) {
      state.credentials.token = null;
      localStorage.removeItem('token');
    },
    deleteUserRole(state: IAuthState) {
      state.credentials.userRole = null;
      localStorage.removeItem('userRole');
    },
  },
  actions: {
    onLogin({ commit }: CommitType, { login, password }: UserDataType) {
      AuthAPI.login(login, password).then((res: any) => {
        commit('setToken', res.token);
        commit('setUserRole', res.userRole);
      });
    },
    onLogout({ commit }: CommitType) {
      commit('deleteToken');
      commit('deleteUserRole');
      delete DefaultAPIInstance.defaults.headers.common['authorization'];
    },
  },
  namespaced: true,
};
