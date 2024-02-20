<template>
  <v-app>
    <v-main>
      <table-currencies />
    </v-main>
  </v-app>
</template>

<script>
import TableCurrencies from './components/TableCurrencies';

export default {
  name: 'App',

  components: {
    TableCurrencies,
  },
};
</script>
