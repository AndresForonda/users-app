import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/vue'
import UsersTableRow from '../UsersTableRow.vue'
import { BasicUserInfoInterface } from '@/models/users'
import { baseUserInfo, spyUseUsers } from './mocks'

const mountComponentFactory = (
  userInfo: BasicUserInfoInterface = baseUserInfo,
) => {
  return render(UsersTableRow, { props: { userInfo } })
}

spyUseUsers()

describe('<users-table-row />', () => {
  it("Should render the user's name, username and email", async () => {
    mountComponentFactory({ ...baseUserInfo })
    const nameText = await screen.findByTestId(
      `${baseUserInfo.name}-${baseUserInfo.id}`,
    )
    const usernameText = await screen.findByTestId(
      `${baseUserInfo.username}-${baseUserInfo.id}`,
    )
    const emailText = await screen.findByTestId(
      `${baseUserInfo.email}-${baseUserInfo.id}`,
    )
    expect(nameText.innerHTML).toEqual(baseUserInfo.name)
    expect(usernameText.innerHTML).toEqual(baseUserInfo.username)
    expect(emailText.innerHTML).toEqual(baseUserInfo.email)
  })

  it('Emits click event when action button is clicked', async () => {
    const { getByRole, emitted } = mountComponentFactory({ ...baseUserInfo })
    await fireEvent.click(getByRole('button'))
    expect(emitted()).toHaveProperty('click')
  })
})
