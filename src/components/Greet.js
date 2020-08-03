import React from "react";

// NOTE Regular--- function Greet(props) {
// NOTE Destructuring in parameters
function Greet({ name, heroName }) {
  // NOTE Destructuring in function body
  //  const {name, heroName} = props
  //
  return (
    <div>
      <h1>
        Hello {name}, or should I call you {heroName}{" "}
      </h1>
      {/* {props.children} */}
    </div>
  );
}

//  Greet = (props) => {
//   return <h1>Hello {props.name}</h1>;
// };
export default Greet;
