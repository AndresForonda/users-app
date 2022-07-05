import { describe, expect, it } from 'vitest'
import getters from '../usersGetters'
import { usersResponse } from './mockUsers'

describe('Users Getters', () => {
  it('Should return a user by its Id', () => {
    const userId = 1
    const user = usersResponse.filter((user) => user.id === userId)[0]
    const obtainedUserById = getters.getUserBasicInfoById({
      users: usersResponse,
      errorMessage: '',
    })(1)
    expect(obtainedUserById).toEqual(user)
  })
})
