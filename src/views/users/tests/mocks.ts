import { BasicUserInfoInterface } from '@/models/users'
import * as usersComposable from '../useUsers'
import { ref, computed } from 'vue'
import { vi } from 'vitest'

export const baseUserInfo: BasicUserInfoInterface = {
  id: 1,
  name: 'Andres',
  username: 'doit',
  email: 'andresforonda.af@gmail.com',
}

export const spyUseUsers = () =>
  vi.spyOn(usersComposable, 'useUsers').mockImplementation(() => ({
    filterWord: ref(''),
    showEditModal: ref(false),
    users: computed(() => []),
    userIdToEdit: ref(),
  }))