import Vuex from 'vuex';
import feathersClient from '~/plugins/feathers-client';
import feathersVuex, { initAuth } from 'feathers-vuex';

const { service, auth } = feathersVuex(feathersClient, { idField: '_id' });

const createStore = () => {
  return new Vuex.Store({
    state: {},
    actions: {
      nuxtServerInit({ commit, dispatch }, { req }) {
        return initAuth({
          commit,
          dispatch,
          req,
          moduleName: 'auth',
          cookieName: 'feathers-jwt',
        });
      },
    },
    plugins: [
      service('docs'),
      auth({ userService: 'users' }),
    ],
  });
};

export default createStore;
