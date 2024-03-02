import { GetStoredDataTypes, StoreTypes } from 'types'
import { useLocalStoreHook } from 'hook'


export const storedData = ({ storeItem, type, title, order, answer }: GetStoredDataTypes) => {
  const { parseData } = useLocalStoreHook(storeItem)
  const deletedExistedData = parseData.filter(({ order: number }) => number !== order)

  const preparedData: StoreTypes = {
    order,
    title,
    type,
    answer,
  }

  window.localStorage.setItem(storeItem, JSON.stringify([...deletedExistedData, preparedData]))
}