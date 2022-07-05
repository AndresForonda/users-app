<script lang="ts" setup>
import {
  BasicUserInfoInterface,
  UsersTableHeadersInterface,
} from '@/models/users'
import { PropType } from 'vue'
import UsersTableActionButton from './UsersTableActionButton.vue'
import UsersTableRowCell from './UsersTableRowCell.vue'

defineProps({
  userInfo: {
    type: Object as PropType<BasicUserInfoInterface>,
    required: true,
  },

  tableHeaders: {
    type: Object as PropType<UsersTableHeadersInterface>,
    required: true,
  },
})
</script>
<template>
  <div class="users-row">
    <users-table-row-cell
      :id="userInfo.id"
      :table-header="tableHeaders.name"
      :cell-value="userInfo.name"
    />
    <users-table-row-cell
      :id="userInfo.id"
      :table-header="tableHeaders.username"
      :cell-value="userInfo.username"
    />
    <users-table-row-cell
      :id="userInfo.id"
      :table-header="tableHeaders.email"
      :cell-value="userInfo.email"
    />
    <div class="users-cell">
      <users-table-action-button :id="userInfo.id" />
    </div>
  </div>
</template>
<style scoped>
@import '@/assets/css/variables.css';
.users-row {
  display: flex;
  border-bottom: 1px solid var(--color-gray);
  flex-direction: column;
  padding: 20px;
}

.users-row:hover {
  background-color: var(--color-gray);
}

.users-cell {
  display: flex;
}

@media screen and (min-width: 1080px) {
  .users-row {
    flex-direction: row;
    padding: 10px 20px;
  }

  .users-cell {
    display: block;
    flex-grow: 1;
    max-width: 210px;
  }
}
</style>
