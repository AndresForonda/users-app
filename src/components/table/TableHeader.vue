<script setup lang="ts">
import { GenericObject } from '@/models/generics'
import { PropType } from 'vue'

defineProps({
  tableHeaders: {
    type: Object as PropType<GenericObject>,
    required: true,
  },
})
</script>

<style></style>

<template>
  <div class="row header" data-testid="users-table-header">
    <div class="cell" v-for="header in tableHeaders">{{ header }}</div>
  </div>
</template>
