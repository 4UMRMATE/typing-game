const textInput = (state = "", action) => {
  switch (action.type) {
    case "INPUT_TEXT":
      return action.payload;
    default:
      return state;
  }
};

export default textInput