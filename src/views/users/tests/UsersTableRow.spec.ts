import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/vue'
import UsersTableRow from '../UsersTableRow.vue'
import {
  BasicUserInfoInterface,
  UsersTableHeadersInterface,
} from '@/models/users'
import { baseTableHeaders, baseUserInfo, spyUseUsers } from './mocks'

const mountComponentFactory = (
  userInfo: BasicUserInfoInterface = baseUserInfo,
  tableHeaders: UsersTableHeadersInterface = baseTableHeaders,
) => {
  return render(UsersTableRow, { props: { userInfo, tableHeaders } })
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
    expect(nameText.innerHTML).toContain(baseUserInfo.name)
    expect(usernameText.innerHTML).toContain(baseUserInfo.username)
    expect(emailText.innerHTML).toContain(baseUserInfo.email)
  })
})
