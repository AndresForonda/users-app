import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/vue'
import UsersTableRowCell from '../UsersTableRowCell.vue'

describe('<users-table-row-cell />', () => {
  it('Should render the value passed as prop', async () => {
    const cellValue = 'Andres'
    const tableHeader = 'Name'
    const id = 1
    render(UsersTableRowCell, {
      props: { tableHeader, cellValue, id },
    })

    const cellValueText = await screen.findByTestId(`${cellValue}-${id}`)
    expect(cellValueText.innerHTML).toContain(cellValue)
    expect(cellValueText.innerHTML).toContain(tableHeader)
  })
})
