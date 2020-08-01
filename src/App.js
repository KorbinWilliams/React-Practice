import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/HelloJSX";
import HelloJs from "./components/HelloJS";

function App() {
  return (
    <div className="App">
      <Greet name="jesus" heroName="jehova">
        <p>These are the children</p>
      </Greet>
      <Greet name="satan" heroName="diablo">
        <button>Action</button>
      </Greet>
      <Greet name="budhha" heroName="sidartha gatama"></Greet>
      <Welcome name="jesus" heroName="jehova"></Welcome>
      <Welcome name="satan" heroName="diablo"></Welcome>
      <Welcome name="budhha" heroName="sidartha gatama"></Welcome>
    </div>
  );
}

export default App;
