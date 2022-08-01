import logo from "./logo.svg";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import HelloComponent from "./components/HelloComponent";

function App() {
  return (
    <div>
      <ClickCounter />
      <HoverCounter />
      <HelloComponent />
    </div>
  );
}

export default App;
