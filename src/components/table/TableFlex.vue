<script setup lang="ts">
import { GenericObject } from '@/models/generics'
import { PropType } from 'vue'
import TableHeader from './TableHeader.vue'
defineProps({
  tableHeaders: {
    type: Object as PropType<GenericObject>,
    required: true,
  },
})
</script>
<style>
.flex-table {
  border: 1px solid rgb(174, 174, 174);
  border-radius: 10px;
  width: 500px;
  margin: 20px auto;
}

.table-body {
  max-height: 60vh;
  overflow-y: scroll;
  overflow-x: hidden;
  margin: 10px auto;
}

@media screen and (min-width: 1080px) {
  .flex-table {
    width: 880px;
  }
}
</style>
<template>
  <div class="flex-table" data-testid="flex-table" id="flex-table">
    <table-header :table-headers="tableHeaders" />
    <div class="table-body">
      <slot name="table-body" />
    </div>
  </div>
</template>
