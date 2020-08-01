import React from "react";

function HelloJs() {
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "Hello Vishwaz")
  );
}

export default HelloJs;
