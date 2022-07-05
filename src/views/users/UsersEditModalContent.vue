<script setup lang="ts">
import { useUsers } from './useUsers'
const { userInfoToUpdate } = useUsers()
</script>

<template>
  <form @submit.prevent class="edit-form">
    <div class="edit-form-input-wrapper">
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="John Doe"
        v-model="userInfoToUpdate.name"
      />
    </div>
    <div class="edit-form-input-wrapper">
      <label for="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="nick or alias"
        v-model="userInfoToUpdate.username"
      />
    </div>
    <div class="edit-form-input-wrapper">
      <label for="email">Email</label>
      <input
        type="text"
        id="username"
        name="email"
        placeholder="example@example.com"
        v-model="userInfoToUpdate.email"
      />
    </div>
  </form>
</template>
<style scoped>
@import '@/assets/css/variables.css';
.edit-form {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.edit-form-input-wrapper {
  margin-bottom: 25px;
}
</style>
