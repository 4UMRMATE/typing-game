const gameState = (state = false, action) => {
  switch (action.type) {
    case "START_GAME":
      return true;
    case "FINISH_GAME":
      return false;
    default:
      return state;
  }
};

export default gameState