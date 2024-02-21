<template>
  <v-container class="table-currencies">
    <h3>Table currencies</h3>
    <date-picker @onChangeDate="onChangeDate" />
    <v-data-table
      :loading="getLoading"
      :headers="getHeaders"
      :page="page"
      loading-text="Loading... Please wait"
      :items="getCurrencies"
      :items-per-page="itemsPerPage"
    >
      <template #bottom></template>
    </v-data-table>
    <v-pagination
      v-if="!!getPageCounts"
      v-model="page"
      :length="getPageCounts"
    ></v-pagination>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import DatePicker from "./DatePicker";

const store = useStore();

const page = ref(1);
const itemsPerPage = 10;

const getHeaders = store.getters.getHeaders;

const getCurrencies = computed(() => {
  return store.getters.getCurrencies;
});
const getLoading = computed(() => {
  return store.getters.getLoading;
});
const getPageCounts = computed(() => {
  return Math.ceil(getCurrencies.value.length / itemsPerPage);
});

onMounted(() => {
  store.dispatch("loadCurrencies");
});

function onChangeDate(date) {
  store.dispatch("loadCurrencies", date);
}
</script>
