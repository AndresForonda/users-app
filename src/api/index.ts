import { UserInterface } from '../models'
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
