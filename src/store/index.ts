import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { RootStateInterface } from '@/models/store'
import users from './users'

// Create a unique key for the store module
export const key: InjectionKey<Store<RootStateInterface>> = Symbol()

// Create the store with the users module
export const store = createStore<RootStateInterface>({
  modules: {
    users,
  },
})

// Export the useStore composable using the unique key
export function useStore(): Store<RootStateInterface> {
  return baseUseStore(key)
}
