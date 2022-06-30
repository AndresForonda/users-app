import { UserInterface } from '../models'
import { HttpClient } from './client.api'

const usersApi = () => ({
  get: async () => {
    const data = await HttpClient().get<UserInterface[]>({
      url: 'https://jsonplaceholder.typicode.com/users',
    })
    return data
  },
})

export default usersApi
