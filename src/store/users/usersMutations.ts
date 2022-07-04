import { UsersStateInterface } from '@/models/store'
import { UserInterface } from '@/models/users'
import { MutationMethod } from 'vuex'

const setUsers: MutationMethod = (
  state: UsersStateInterface,
  users: UserInterface[],
) => (state.users = users)

const setErrorMessage: MutationMethod = (
  state: UsersStateInterface,
  errorMessage: string,
) => (state.errorMessage = errorMessage)

export default {
  setErrorMessage,
  setUsers,
}
