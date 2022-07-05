import { UsersStateInterface } from '@/models/store'
import { getPersistentData } from './helpers'

const state: UsersStateInterface = {
  users: getPersistentData('users') || [],
  errorMessage: '',
  requestPending: false,
}

export default state
