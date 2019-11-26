import React, { Component } from "react";

//this has been converted to functional component(UI component) from class component.

//const Ninjas = ({ninjas}) => { THIS LINE WILL ALSO WORK, ITS USING DESTRUCTURING.
const Ninjas = props => {
  const { ninjas } = props;
  const ninjaList = ninjas.map(ninja => {
    return (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Belt: {ninja.belt}</div>
        <div>Age: {ninja.age}</div>
      </div>
    );
  });
  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;
