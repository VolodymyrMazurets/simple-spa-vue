import { fetchBreeds } from '../../http';
import { DOGS_BREED_UPDATE, DOGS_BREED_REQUEST, DOGS_BREED_CLEAR_STATE } from '../types';

const state = () => ({
  breeds: [],
});
const mutations = {
  [DOGS_BREED_UPDATE](state, payload) {
    state.breeds = [...payload];
  },
  [DOGS_BREED_CLEAR_STATE](state) {
    state.breeds = [];
  },
};

const getters = {};

const actions = {
  [DOGS_BREED_REQUEST]: async ({ commit }) => {
    try {
      const data = await fetchBreeds();
      commit(DOGS_BREED_UPDATE, data);
    } catch {
      console.log('somethimg wrong  width fetch');
    }
  },
};

export default { namespaced: true, state, mutations, getters, actions };
