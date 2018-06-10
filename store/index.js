import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {},
    actions: {
      nuxtServerInit({ commit, dispatch }, { req }) {
        // @ToDo: get auth-token from req for ssr-axios
      },
    },
  });
};

export default createStore;
