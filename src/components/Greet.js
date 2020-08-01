import React from "react";

function Greet(props) {
  return (
    <div>
      <h1>
        {" "}
        Hello {props.name}, or should I call you {props.heroName}{" "}
      </h1>
      {props.children}
    </div>
  );
}

//  Greet = (props) => {
//   return <h1>Hello {props.name}</h1>;
// };
export default Greet;
