import { StoreTypes } from 'types'

export const useLocalStoreHook = (storeItem: string, ) => {
  const store = localStorage.getItem(storeItem)
  const parseData: StoreTypes[] = store ? JSON.parse(store) : []

  return {parseData}
}