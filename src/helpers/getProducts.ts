import {ProductType} from "../types";
import {data} from "../state/scratch";

export const getProducts = (): ProductType[] => {
  let temporaryState = localStorage.getItem('state')
  if (!temporaryState || temporaryState !== JSON.stringify(data)) {
    localStorage.setItem('state', JSON.stringify(data))
    return data
  }
  return JSON.parse(temporaryState)
}