import { UserInterface } from '@/models/users'
import { useStore } from '@/store'
import { computed, ref } from 'vue'

const filterWord = ref('') // used to filter the table registers
const showEditModal = ref(false) // used to hide/show edit modal
const userIdToEdit = ref<number>() // user id for the user to be edited

export const useUsers = () => {
  const store = useStore()
  store.dispatch('users/getUsers') // request users from store action
  const users = computed<UserInterface[]>(() => {
    if (filterWord.value)
      // filter the users array using filter word, filter is applied to name, username and email
      return store.state.users.users.filter(
        (user) =>
          user.name
            .toLocaleLowerCase()
            .includes(filterWord.value.toLocaleLowerCase()) ||
          user.username
            .toLocaleLowerCase()
            .includes(filterWord.value.toLocaleLowerCase()) ||
          user.email
            .toLocaleLowerCase()
            .includes(filterWord.value.toLocaleLowerCase()),
      )
    // return users state if there is not any word fo filter
    return store.state.users.users
  })
  return {
    filterWord,
    showEditModal,
    users,
    userIdToEdit,
  }
}
