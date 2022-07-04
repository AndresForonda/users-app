import { UserInterface } from '@/models/users'
import { useStore } from '@/store'
import { computed, ref } from 'vue'

const filterWord = ref('')
const showEditModal = ref(false)
const userIdToEdit = ref<number>()

export const useUsers = () => {
  const store = useStore()
  store.dispatch('users/getUsers')
  const users = computed<UserInterface[]>(() => {
    if (filterWord.value)
      return store.state.users.users.filter(
        (user) =>
          user.name.includes(filterWord.value) ||
          user.username.includes(filterWord.value) ||
          user.email.includes(filterWord.value),
      )
    return store.state.users.users
  })
  return {
    filterWord,
    showEditModal,
    users,
    userIdToEdit,
  }
}
