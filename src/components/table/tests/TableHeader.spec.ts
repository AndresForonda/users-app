import {
  BasicUserInfoInterface,
  UsersTableHeadersInterface,
} from '@/models/users'
import { render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import { baseTableHeaders } from './mocks'
import TableHeader from '../TableHeader.vue'

const mountComponentFactory = (
  tableHeaders: UsersTableHeadersInterface = baseTableHeaders,
) => {
  return render(TableHeader, { props: { tableHeaders } })
}

describe('<table-header />', () => {
  it('Renders the headers', async () => {
    mountComponentFactory()
    const usersTableHeader = await screen.findByTestId('users-table-header')
    expect(usersTableHeader.innerHTML).toContain(baseTableHeaders.name)
    expect(usersTableHeader.innerHTML).toContain(baseTableHeaders.username)
    expect(usersTableHeader.innerHTML).toContain(baseTableHeaders.email)
    expect(usersTableHeader.innerHTML).toContain(baseTableHeaders.actions)
  })
})
