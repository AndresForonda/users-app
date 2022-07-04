import { UsersStateInterface } from '@/models/store'
import { UserInterface, UserUpdateInterface } from '@/models/users'
import { MutationMethod } from 'vuex'

const setUsers: MutationMethod = (
  state: UsersStateInterface,
  users: UserInterface[],
) => (state.users = users)

const setErrorMessage: MutationMethod = (
  state: UsersStateInterface,
  errorMessage: string,
) => (state.errorMessage = errorMessage)

const updateUserById: MutationMethod = (
  state: UsersStateInterface,
  userInfo: UserUpdateInterface,
) => {
  const userIndex = state.users.findIndex((user) => user.id === userInfo.id)
  const user = state.users[userIndex]
  state.users[userIndex] = { ...user, ...userInfo }
}

export default {
  setErrorMessage,
  setUsers,
  updateUserById,
}
