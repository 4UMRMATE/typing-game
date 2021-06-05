import "./App.css";
import Info from "./components/Info";
import Display from "./components/Display";
import TextInput from "./components/TextInput";
import { InputProvider,InputContext } from "./context/text-input";

function App() {
  return (
    <InputProvider>
    <InputContext.Consumer>
  {value => <p>{value.value}</p>}
    </InputContext.Consumer>
      <div className="App">
        <Info />
        <Display />
        <TextInput />
      </div>
    </InputProvider>
  );
}

export default App;
