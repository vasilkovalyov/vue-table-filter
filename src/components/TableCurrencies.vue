<template>
  <v-container class="table-currencies">
    <h3>Table currencies</h3>
    <date-picker @onChangeDate="onChangeDate" />
    <v-data-table
      :loading="getLoading"
      loading-text="Loading... Please wait"
      :headers="getHeaders"
      :items="getCurrencies"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      class="elevation-1"
      @page-count="pageCount = $event"
    ></v-data-table>
    <v-pagination
      v-if="!!getPageCounts"
      v-model="page"
      :length="getPageCounts"
    ></v-pagination>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import DatePicker from './DatePicker.vue';

export default {
  name: 'TableCurrencies',
  components: {
    DatePicker,
  },
  mounted() {
    this.loadCurrencies();
  },
  data: () => ({
    page: 1,
    itemsPerPage: 10,
  }),
  props: {
    headers: Array,
    currencies: Array,
  },
  methods: {
    ...mapActions(['loadCurrencies']),
    onChangeDate(date) {
      this.loadCurrencies(date);
    },
  },
  computed: {
    ...mapGetters(['getHeaders', 'getCurrencies', 'getLoading']),
    getPageCounts() {
      return Math.ceil(this.getCurrencies.length / this.itemsPerPage);
    },
  },
};
</script>

<style></style>
