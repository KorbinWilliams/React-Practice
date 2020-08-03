import React, { Component } from "react";
import Person from "./Person";

class NameList extends Component {
  render() {
    // NOTE exercise #1
    // const names = ["Bruce", "Clark", "Diana"];
    // const nameList = names.map((n) => <h2>{n}</h2>);
    // return <div>{nameList}</div>;

    // NOTE exercise #2 rendering lists(includes person.js)
    const persons = [
      {
        id: 1,
        name: "Bruce",
        age: 30,
        skill: "React",
      },
      {
        id: 2,
        name: "Clark",
        age: 25,
        skill: "Angular",
      },
      {
        id: 3,
        name: "Diana",
        age: 42,
        skill: "Vue",
      },
    ];

    const personList = persons.map((person) => (
      <Person key={person.id} person={person} />
    ));

    return <div>{personList}</div>;
  }
}

export default NameList;
