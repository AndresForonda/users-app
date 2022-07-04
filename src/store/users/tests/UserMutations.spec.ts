import { describe, expect, it } from 'vitest'
import UsersMutations from '../usersMutations'
import { infoForUpdateUser, usersResponse } from './mockUsers'

describe('Users mutations', () => {
  it('Should mutate the users state', () => {
    const state = { users: [] }
    UsersMutations.setUsers(state, usersResponse)
    expect(state.users).toBe(usersResponse)
  })

  it('Should update the state of one user by its id', () => {
    const state = { users: usersResponse }
    UsersMutations.updateUserById(state, { ...infoForUpdateUser })
    const updatedUser = state.users[0]
    expect(updatedUser.name).toEqual(infoForUpdateUser.name)
    expect(updatedUser.username).toEqual(infoForUpdateUser.username)
    expect(updatedUser.email).toEqual(infoForUpdateUser.email)
  })
})
