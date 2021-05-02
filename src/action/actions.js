import data from "../data"

export const getCatalog = () => {
  return {
    type: "GET_CATALOG",
    payload: data,
  }
}
