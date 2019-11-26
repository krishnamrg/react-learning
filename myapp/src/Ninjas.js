import React from "react";

//this has been converted to functional component(UI component) from class component.

//const Ninjas = ({ninjas}) => { THIS LINE WILL ALSO WORK, ITS USING DESTRUCTURING.
// const Ninjas = props => {
//   const { ninjas } = props;
//   const ninjaList = ninjas.map(ninja => {
//     return (
//       <div className="ninja" key={ninja.id}>
//         <div>Name: {ninja.name}</div>
//         <div>Belt: {ninja.belt}</div>
//         <div>Age: {ninja.age}</div>
//       </div>
//     );
//   });
//   return <div className="ninja-list">{ninjaList}</div>;

//Changed from above T-15 to this T-16
const Ninjas = ({ ninjas }) => {
  return ( // one can also use ternary operator and return null or if condition and return null in else
    <div className="ninja-list"> {
      ninjas.filter(ninja => ninja.age > 30).map(ninja => {
        return (
          <div className="ninja" key={ninja.id}>
            <div>Name: {ninja.name}</div>
            <div>Belt: {ninja.belt}</div>
            <div>Age: {ninja.age}</div>
          </div>
        );
      })
    }
    </div>
  );
};

export default Ninjas;
