<script setup lang="ts">
import { useUsers } from './useUsers'

defineProps({
  id: {
    type: Number,
    required: true,
  },
})

const { showEditModal, userIdToEdit, userInfoToUpdate, userToEdit } = useUsers()

const openEditModal = (id: number) => {
  showEditModal.value = true
  userIdToEdit.value = id
  userInfoToUpdate.value = {
    id: userToEdit.value.id,
    name: userToEdit.value.name,
    username: userToEdit.value.username,
    email: userToEdit.value.email,
  }
}
</script>
<template>
  <button
    class="mx-auto action-button"
    :data-testid="`editButton-${id}`"
    @click="openEditModal(id)"
  >
    <div class="flex"></div>
    <div class="flex">
      <img class="edit-icon" src="@/assets/img/edit-icon.png" />
      <span>Edit</span>
    </div>
  </button>
</template>
<style scoped>
button {
  font-size: 20px;
  color: white;
  background: rgb(0, 172, 177);
  padding: 8px 15px;
  border-radius: 10px;
  offset-rotate: revert;
}

button:hover {
  cursor: pointer;
  background: rgb(0, 201, 208);
}

.edit-icon {
  width: 24px;
  height: 24px;
}
</style>
