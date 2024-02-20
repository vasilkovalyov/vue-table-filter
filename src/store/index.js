import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import currencies from './currencies';

export default new Vuex.Store({
  modules: {
    currencies,
  },
});
