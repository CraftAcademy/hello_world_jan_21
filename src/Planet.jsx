import React from "react";

const Planet = (props) => {
  // debugger
  return (
    <>
      <h1>
        {props.planet} it is {props.weather} today
      </h1>
    </>
  );
};

export default Planet;
