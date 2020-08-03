import React, { Component } from "react";
import Person from "./Person";

class NameList extends Component {
  render() {
    // NOTE exercise #1
    // const names = ["Bruce", "Clark", "Diana"];
    // const nameList = names.map((n) => <h2>{n}</h2>);
    // return <div>{nameList}</div>;

    // NOTE exercise #2 rendering lists(includes person.js)
    const names = ["Bruce", "Clark", "Diana"];
    // const persons = [
    //   {
    //     id: 1,
    //     name: "Bruce",
    //     age: 30,
    //     skill: "React",
    //   },
    //   {
    //     id: 2,
    //     name: "Clark",
    //     age: 25,
    //     skill: "Angular",
    //   },
    //   {
    //     id: 3,
    //     name: "Diana",
    //     age: 42,
    //     skill: "Vue",
    //   },
    // ];

    // const personList = persons.map((person) => (
    //   <Person key={person.id} person={person} />
    // ));
    const nameList = names.map((name, index) => (
      <h2 key={index}>
        {name}-{index}
      </h2>
    ));

    return <div>{nameList}</div>;
  }
}

export default NameList;
