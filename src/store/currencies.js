import { apiLoadCurrencies } from "../api/loadCurrencies";

export default {
  state: {
    headers: [
      {
        title: "Currency",
        align: "start",
        sortable: false,
        value: "txt",
      },
      {
        title: "Code",
        align: "start",
        sortable: false,
        value: "cc",
      },
      {
        title: "Date",
        align: "start",
        sortable: true,
        value: "exchangedate",
      },
      {
        title: "Rate",
        align: "start",
        sortable: true,
        value: "rate",
      },
      {
        title: "R030",
        align: "start",
        sortable: true,
        value: "r030",
      },
    ],
    currencies: [],
    loading: true,
  },
  mutations: {
    setCurrencies(state, currencies) {
      state.currencies = currencies;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    loadCurrencies(store, date) {
      apiLoadCurrencies(date)
        .then((response) => {
          store.commit("setCurrencies", response);
        })
        .catch(() => {
          store.commit("setCurrencies", []);
        })
        .finally(() => {
          store.commit("setLoading", false);
        });
    },
  },
  getters: {
    getHeaders(state) {
      return state.headers;
    },
    getCurrencies(state) {
      return state.currencies;
    },
    getLoading(state) {
      return state.loading;
    },
  },
};
