import { UserInterface } from '@/models/users'
import usersApi from './users.api'

interface ApiClientInterface {
  usersApi: () => {
    get: () => Promise<UserInterface[]>
  }
}

/**
 * Implementation of the http client, registering the api modules, in this case,
 * only the usersApi module is available, but if there are more api modules, they
 * should be registered here.
 */

const ApiClient: ApiClientInterface = {
  usersApi,
}

export default ApiClient
