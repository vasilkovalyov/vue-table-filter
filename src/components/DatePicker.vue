<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        label="Date"
        hint="YYYY-MM-DD format"
        persistent-hint
        prepend-icon="mdi-calendar"
        v-bind="attrs"
        v-on="on"
        @blur="(e) => formatDate(e.target.value)"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="date"
      no-title
      @input="menu = false"
    ></v-date-picker>
  </v-menu>
</template>

<script>
import { getFormatDate } from '../utils/date';

export default {
  name: 'DatePicker',
  watch: {
    date: function (date) {
      const formatDate = getFormatDate(date);
      this.$emit('onChangeDate', formatDate);
    },
  },
  data: () => ({
    menu: false,
    date: '',
    dateFormatted: '',
  }),
};
</script>
