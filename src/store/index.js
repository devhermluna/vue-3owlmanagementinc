import Vue from 'vue';
import Vuex from 'vuex';
import categories from '../constants/categories';
import httpClient from '../common/http-client';
import { get, filter } from 'lodash';

const [defaultCategory] = categories;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    category: defaultCategory,
    active: {},
    photos: [],
    loading: false,
  },
  getters: {
    hasActive(state) {
      return !!get(state, 'active.url_z');
    },
  },
  mutations: {
    CATEGORY(state, category) {
      state.category = category;
    },
    LOADING(state, value) {
      state.loading = value;
    },
    PHOTOS(state, payload) {
      state.photos = payload;
    },
    ACTIVE(state, payload) {
      state.active = payload;
    },
  },
  actions: {
    async CHANGE_CATEGORY({ commit, state }, category) {
      if (category === state.category && state.photos.length) return;

      const parseCategory = category || defaultCategory;

      commit('CATEGORY', parseCategory);
      commit('LOADING', true);
      commit('ACTIVE');
      try {
        const { body } = await httpClient.photos.search({
          text: parseCategory,
          extras: 'url_z,description,owner_name',
        });
        const list = get(body, 'photos.photo') || [];
        commit('PHOTOS', filter(list, 'url_z'));
      } catch (error) {
        console.log(error);
        commit('PHOTOS', []);
      } finally {
        commit('LOADING', false);
      }
    },
    SET_ACTIVE({ commit }, payload = {}) {
      commit('ACTIVE', payload);
    },
  },
});
