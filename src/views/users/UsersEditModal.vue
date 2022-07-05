<script setup lang="ts">
import BaseModal from '@/components/modals/BaseModal.vue'
import UsersEditModalContent from './UsersEditModalContent.vue'
import UsersEditModalActions from './UsersEditModalActions.vue'
import { useUsers } from './useUsers'
const { showEditModal } = useUsers()
</script>
<template>
  <base-modal v-model="showEditModal" modal-title="Edit user info">
    <template v-slot:content>
      <users-edit-modal-content />
      <users-edit-modal-actions />
    </template>
  </base-modal>
</template>
