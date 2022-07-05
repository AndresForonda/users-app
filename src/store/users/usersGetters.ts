import { UsersStateInterface } from '@/models/store'
import { BasicUserInfoInterface } from '@/models/users'

const getUserBasicInfoById =
  (state: UsersStateInterface) =>
  (userId: number): BasicUserInfoInterface => {
    const userIndex = state.users.findIndex((user) => user.id === userId)
    return state.users[userIndex]
  }

export default {
  getUserBasicInfoById,
}
