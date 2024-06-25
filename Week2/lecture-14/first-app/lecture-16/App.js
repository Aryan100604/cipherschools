import logo from "./logo.svg";
import "./App.css";

function App() {
  const NAME = "Cipherschools";
  return (
    <>
      <div>
        <h1
          style={{
            color: "green",
          }}
        >
          Hello from the side of {NAME}
        </h1>
      </div>
      <div>Welcome to the first day at {NAME}</div>
    </>
  );
}

export default App;
