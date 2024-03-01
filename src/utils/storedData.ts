import { GetStoredDataTypes, StoreTypes } from 'types'

export const storedData = ({ storeItem, type, title, order, answer }: GetStoredDataTypes) => {

  const store = localStorage.getItem(storeItem)
  const parseData: StoreTypes[] = store ? JSON.parse(store) : []

  const deletedExistedData = parseData.filter(({ order: number }) => number !== order)

  const preparedData: StoreTypes = {
    order,
    title,
    type,
    answer,
  }

  window.localStorage.setItem(storeItem, JSON.stringify([...deletedExistedData, preparedData]))
}