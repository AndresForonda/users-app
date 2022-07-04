import FlexTable from '../FlexTable.vue'
import { render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import { UsersTableHeadersInterface } from '@/models/users'
import { baseTableHeaders } from './mocks'

const tableBody = '<p>Table body</p>'

const mountComponentFactory = (
  tableHeaders: UsersTableHeadersInterface = baseTableHeaders,
) => {
  return render(FlexTable, {
    props: { tableHeaders },
    slots: {
      'table-body': tableBody,
    },
  })
}

describe('<flex-table />', () => {
  it('renders the flex table', async () => {
    mountComponentFactory()
    const flexTable = await screen.findByTestId('flex-table')
    expect(flexTable.className).toBe('flex-table')
    expect(flexTable.innerHTML).toContain('header')
    expect(flexTable.innerHTML).toContain(tableBody)
  })
})
