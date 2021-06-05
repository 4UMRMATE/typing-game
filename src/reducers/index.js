import gameState from "./gameState"
import textInput from "./textInput"
import {combineReducers} from "redux"

const allReducers = combineReducers({
    gameState: gameState,
    textInput: textInput,
})

export default allReducers