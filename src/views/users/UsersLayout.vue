<script setup lang="ts">
import TableFlex from '@/components/table/TableFlex.vue'
import { useUsers } from './useUsers'
import UserTableRow from './UsersTableRow.vue'
import UsersEditModal from './UsersEditModal.vue'
const { filterWord, users } = useUsers()
const baseTableHeaders = {
  name: 'Name',
  username: 'Username',
  email: 'Email',
  actions: 'Actions',
}
</script>
<style>
@import '@/assets/css/variables.css';
.table-body-wrapper {
  border: 1px solid var(--color-gray);
}
.users-layout-wrapper {
  margin-top: 60px;
}
</style>
<template>
  <div class="users-layout-wrapper">
    Filter
    <input v-model="filterWord" />
    <users-edit-modal />
    <table-flex :table-headers="baseTableHeaders">
      <template v-slot:table-body>
        <div class="table-body-wrapper mx-10">
          <user-table-row
            v-for="user in users"
            :key="user.id"
            :userInfo="user"
            :table-headers="baseTableHeaders"
          />
        </div>
      </template>
    </table-flex>
  </div>
</template>
