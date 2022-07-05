<script setup lang="ts">
import { computed } from 'vue'
import { useUsers } from './useUsers'
const { showEditModal, updateUserInfo, userInfoToUpdate } = useUsers()
const saveButtonDisabled = computed<boolean>(() => {
  return (
    !userInfoToUpdate.value.email ||
    !userInfoToUpdate.value.name ||
    !userInfoToUpdate.value.username
  )
})
const saveUserInfo = () => {
  updateUserInfo()
  showEditModal.value = false
}
</script>
<template>
  <div class="users-edit-modal-actions-wrapper">
    <button class="flat-button text-gray" @click="showEditModal = false">
      Cancel
    </button>
    <button
      class="flat-button text-blue"
      @click="saveUserInfo"
      :disabled="saveButtonDisabled"
    >
      Save
    </button>
  </div>
</template>
<style scoped>
.users-edit-modal-actions-wrapper {
  display: flex;
  justify-content: end;
  padding-right: 100px;
}
</style>
