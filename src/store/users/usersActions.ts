import { ActionContext } from 'vuex'
import { RootStateInterface, UsersStateInterface } from '@/models/store'
import ApiClient from '@/api'
import { persistData } from './helpers'
import { BasicUserInfoInterface } from '@/models/users'

const getUsers = async ({
  commit,
  state,
}: ActionContext<UsersStateInterface, RootStateInterface>) => {
  if (state.users.length) return
  try {
    commit('setErrorMessage', '')
    commit('setRequestPending', true)
    const users = await ApiClient.usersApi().get()
    // Save users on persistent storage
    persistData('users', JSON.stringify(users))
    commit('setUsers', users)
  } catch (error) {
    commit('setErrorMessage', 'There was a problem getting the users.')
  } finally {
    commit('setRequestPending', false)
  }
}

const setError = (
  { commit }: ActionContext<UsersStateInterface, RootStateInterface>,
  errorMessage: string = '',
) => {
  commit('setErrorMessage', errorMessage)
}

const updateUserByid = (
  { commit, state }: ActionContext<UsersStateInterface, RootStateInterface>,
  userInfo: BasicUserInfoInterface,
) => {
  commit('updateUserById', userInfo)
  // Update users on persistent storage
  persistData('users', JSON.stringify(state.users))
}

export default {
  getUsers,
  setError,
  updateUserByid,
}
