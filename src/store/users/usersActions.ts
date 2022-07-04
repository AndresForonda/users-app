import { ActionContext } from 'vuex'
import { RootStateInterface, UsersStateInterface } from '@/models/store'
import ApiClient from '@/api'
import { persistData } from './helpers'

const getUsers = async ({
  commit,
  state,
}: ActionContext<UsersStateInterface, RootStateInterface>) => {
  if (state.users.length) return
  const data = await ApiClient.usersApi().get()
  persistData('users', JSON.stringify(data))
  commit('setUsers', data)
}

const setError = (
  { commit }: ActionContext<UsersStateInterface, RootStateInterface>,
  errorMessage: string = '',
) => {
  commit('setErrorMessage', errorMessage)
}

export default {
  setError,
  getUsers,
}
