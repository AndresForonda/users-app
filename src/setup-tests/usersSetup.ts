import { rest } from 'msw'
import { usersResponse } from '@/store/users/tests/mockUsers'

export const usersSetup = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(usersResponse))
  }),
]
