<script setup lang="ts">
import FlexTable from '@/components/table/FlexTable.vue'
import { useUsers } from './useUsers'
import UserTableRow from './UsersTableRow.vue'
const { filterWord, users } = useUsers()
const baseTableHeaders = {
  name: 'Name',
  username: 'Username',
  email: 'Email',
  actions: 'Actions',
}
</script>
<template>
  Filter
  <input v-model="filterWord" />
  <flex-table :table-headers="baseTableHeaders">
    <template v-slot:table-body>
      <UserTableRow v-for="user in users" :key="user.id" :userInfo="user" />
    </template>
  </flex-table>
</template>
