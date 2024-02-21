<template>
  <v-text-field
    type="date"
    v-model="date"
    label="Date"
    hint="DD-MM-YYYY format"
    persistent-hint
    prepend-icon="mdi-calendar"
    @:update:focused="(e) => formatDate(e.target.value)"
  ></v-text-field>
</template>

<script setup>
import { getFormatDate } from "../utils/date";
import { ref, watch, defineEmits } from "vue";

const date = ref(null);
const emit = defineEmits(["onChangeDate"]);

watch(date, (value) => {
  const formatDate = getFormatDate(value);
  emit("onChangeDate", formatDate);
});
</script>
