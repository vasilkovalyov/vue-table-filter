import { createStore } from "vuex";

import currencies from "./currencies";

export default createStore({
  modules: {
    currencies,
  },
});
