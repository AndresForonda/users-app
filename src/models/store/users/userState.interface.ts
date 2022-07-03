import { UserInterface } from '@/models/users'

export interface UsersStateInterface {
  users: UserInterface[]
  errorMessage: string
}
