export default (state = true, action) => {
  switch (action.type) {
    case 'STOP_FETCHING_DATA':
      return false
    case 'START_FETCHING_DATA':
      return true
    default:
      return state
  }
}
