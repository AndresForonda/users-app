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

<style>
.header {
  display: none;
}

@media screen and (min-width: 1080px) {
  .header {
    display: flex;
    padding: 5px 20px;
    margin-top: 10px;
  }

  .header-cell {
    flex-grow: 1;
  }
}
</style>

<template>
  <div class="header" data-testid="users-table-header">
    <div class="header-cell" v-for="header in tableHeaders">{{ header }}</div>
  </div>
</template>
