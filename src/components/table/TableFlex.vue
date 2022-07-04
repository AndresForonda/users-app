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
<template>
  <div class="flex-table" data-testid="flex-table" id="flex-table">
    <table-header :table-headers="tableHeaders" />
    <slot name="table-body" />
  </div>
</template>
