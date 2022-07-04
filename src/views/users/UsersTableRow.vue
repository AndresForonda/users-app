<script lang="ts" setup>
import { BasicUserInfoInterface } from '@/models/users'
import { PropType } from 'vue'
import { useUsers } from './useUsers'

const { showEditModal, userIdToEdit } = useUsers()
defineProps({
  userInfo: {
    type: Object as PropType<BasicUserInfoInterface>,
    required: true,
  },
})

const openEditModal = (id: number) => {
  showEditModal.value = true
  userIdToEdit.value = id
}
</script>
<template>
  <div class="row">
    <div
      class="cell text-left truncate"
      :data-testid="`${userInfo.name}-${userInfo.id}`"
    >
      {{ userInfo.name }}
    </div>
    <div
      class="cell text-left"
      :data-testid="`${userInfo.username}-${userInfo.id}`"
    >
      {{ userInfo.username }}
    </div>
    <div
      class="cell text-left"
      :data-testid="`${userInfo.email}-${userInfo.id}`"
    >
      {{ userInfo.email }}
    </div>
    <div class="cell">
      <button
        :data-testid="`editButton-${userInfo.id}`"
        @click="openEditModal(userInfo.id)"
      >
        editar
      </button>
    </div>
  </div>
</template>
