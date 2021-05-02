const catalogReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_CATALOG":
      return [...state, action.payload]
    default:
      return state
  }
}

export default catalogReducer
