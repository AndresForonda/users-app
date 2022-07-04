import usersActions from '../usersActions'
import * as helper from '../helpers'
import { describe, expect, it, vi } from 'vitest'
import { ActionContext } from 'vuex'
import { RootStateInterface, UsersStateInterface } from '@/models/store'
import { usersResponse } from './mockUsers'

const actionContext = (
  state: UsersStateInterface = { users: [], errorMessage: '' },
): ActionContext<UsersStateInterface, RootStateInterface> => ({
  dispatch: vi.fn() as any,
  commit: vi.fn() as any,
  state,
  getters: {},
  rootState: { users: state },
  rootGetters: {},
})

describe('Users store actions', () => {
  it('Should request a list of users', async () => {
    const context = actionContext()
    const spy = vi.spyOn(helper, 'persistData')
    spy.mockImplementation(() => {})
    await usersActions.getUsers(context)
    expect(context.commit).toBeCalledTimes(1)
    expect(context.commit).toHaveBeenNthCalledWith(1, 'setUsers', usersResponse)
  })

  it('Should not request the users if there are some users stored', async () => {
    const state = { users: [usersResponse[0]], errorMessage: '' }
    const context = actionContext(state)
    await usersActions.getUsers(context)
    expect(context.commit).toBeCalledTimes(0)
  })

  it('Should call the mutation to update the error message state', () => {
    const context = actionContext()
    const errorMessage = 'There was a problem getting the users'
    usersActions.setError(context, errorMessage)
    expect(context.commit).toBeCalledTimes(1)
    expect(context.commit).toHaveBeenNthCalledWith(
      1,
      'setErrorMessage',
      errorMessage,
    )
  })
})
