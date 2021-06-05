import {useDispatch, useSelector} from "react-redux"
import {startGame} from "../actions"

function TextInput() {
  const dispatch = useDispatch()

  return (
    <div className="TextInput">
      <input type="text" onChange={() => dispatch(startGame())} />
    </div>
  );
}

export default TextInput;
