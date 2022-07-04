import { describe, expect, it } from 'vitest'
import UsersMutations from '../usersMutations'
import { usersResponse } from './mockUsers'

describe('Users mutations', () => {
  it('Should mutate the users state', () => {
    const state = { users: [] }
    UsersMutations.setUsers(state, usersResponse)
    expect(state.users).toBe(usersResponse)
  })
})
