import { UserInterface } from '@/models/users'
import usersApi from './users.api'

interface ApiClientInterface {
  usersApi: () => {
    get: () => Promise<UserInterface[]>
  }
}

const ApiClient: ApiClientInterface = {
  usersApi,
}

export default ApiClient
