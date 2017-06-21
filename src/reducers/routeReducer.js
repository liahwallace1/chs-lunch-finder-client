export default (state = {routeName: "Home"}, action) => {
  switch (action.type) {
    case 'CHANGING_ROUTE':
    return action.routeName
    default:
      return state
  }
}
