import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/HelloJSX";
import HelloJs from "./components/HelloJS";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";

function App() {
  return (
    <div className="App">
      <NameList />
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="jesus" heroName="jehova"></Greet> */}
      {/* <Greet name="satan" heroName="diablo">
        <button>Action</button>
      </Greet>
      <Greet name="budhha" heroName="sidartha gatama"></Greet>
      <Welcome name="jesus" heroName="jehova"></Welcome>
  <Welcome name="satan" heroName="diablo"></Welcome>*/}
      {/* <Welcome name="budhha" heroName="sidartha gatama"></Welcome> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
    </div>
  );
}

export default App;
