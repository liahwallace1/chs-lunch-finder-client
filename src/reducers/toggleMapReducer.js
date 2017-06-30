const toggleMap = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_MAP':
      return !state.toggleMap

    default:
      return state
  }
}
