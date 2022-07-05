import { UsersStateInterface } from '@/models/store'
import { UserInterface, BasicUserInfoInterface } from '@/models/users'
import { MutationMethod } from 'vuex'

const setUsers: MutationMethod = (
  state: UsersStateInterface,
  users: UserInterface[],
) => (state.users = users)

const setErrorMessage: MutationMethod = (
  state: UsersStateInterface,
  errorMessage: string,
) => (state.errorMessage = errorMessage)

const setRequestPending: MutationMethod = (
  state: UsersStateInterface,
  status: boolean,
) => (state.requestPending = status)

const updateUserById: MutationMethod = (
  state: UsersStateInterface,
  userInfo: BasicUserInfoInterface,
) => {
  const userIndex = state.users.findIndex((user) => user.id === userInfo.id)
  const user = state.users[userIndex]
  state.users[userIndex] = { ...user, ...userInfo }
}

export default {
  setErrorMessage,
  setRequestPending,
  setUsers,
  updateUserById,
}
