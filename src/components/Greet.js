import React from "react";

export const Greet = (props) => {
  return (
    <div>
      <p>
        {" "}
        Hello {props.name} a.k.a {props.heroName}
      </p>
      {props.children}
    </div>
  );
};

//export default Greet;
