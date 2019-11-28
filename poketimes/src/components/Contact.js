import React from "react";
import TextColorChanger from '../hoc/TextColorChanger'

const Contact = () => {
  return (
    <div>
      <h4 className="center">
        Contact Lorem ipsum color sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </h4>
    </div>
  );
};

export default TextColorChanger(Contact);
