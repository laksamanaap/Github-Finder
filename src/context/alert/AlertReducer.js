const AlertReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALERTS":
      return action.payload;
    case "REMOVE_ALERTS":
      return null;
    default:
      return state;
  }
};

export default AlertReducer;
