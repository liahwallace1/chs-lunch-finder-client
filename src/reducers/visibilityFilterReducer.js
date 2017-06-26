let initialState = {
  visible: false,
  priceFilter: null,
  locationFilter: null,
  featuresFilter: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    // case 'TOGGLE_FILTER':
    //   return {visible: state.visible.toggle}
    default:
      return state
  }
}
