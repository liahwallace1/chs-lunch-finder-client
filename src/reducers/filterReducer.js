export default (state = {visible: false}, action) => {
  switch (action.type) {
    case 'SHOW_FILTER':
      return Object.assign({}, state, {visible: true})
    case 'HIDE_FILTER':
      return Object.assign({}, state, {visible: false})
    default:
      return state
  }
}
