import React from "react";

const TextColorChanger = WrappedComponent => {
  const colors = [
    "red",
    "yellow",
    "cyan",
    "blue",
    "orange",
    "green",
    "violet",
    "gray",
    "maroon",
    "pink",
    "black",
    "brown"
  ];
  const colorName = `${colors[Math.floor(Math.random() * 12)]}-text`;
  console.log(colorName);

  return props => {
    return (
      <div className={colorName}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default TextColorChanger;
