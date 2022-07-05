import { fireEvent, render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import UsersTableActionButton from '../UsersTableActionButton.vue'
import { spyUseUsers } from './mocks'

spyUseUsers()

describe('<user-table-action-button />', () => {
  it('Emits click event when action button is clicked', async () => {
    const { getByRole, emitted } = render(UsersTableActionButton, {
      props: { id: 1 },
    })
    await fireEvent.click(getByRole('button'))
    expect(emitted()).toHaveProperty('click')
  })
})
