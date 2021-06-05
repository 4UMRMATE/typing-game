export const inputText = (state) => {
  return {
    type: "INPUT_TEXT",
    payload: state
  };
};

export const startGame = () => {
    return {
        type: "START_GAME"
    }
}

export const finishGame = () => {
    console.log("finish")
    return {
        type: "FINISH_GAME"
    }
}