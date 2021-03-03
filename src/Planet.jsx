import React from "react";
import { useSelector } from "react-redux";

const Planet = () => {
  const newGreeting = useSelector((state) => state.newGreeting);
  
  return (
    <>
      <h1>{newGreeting} World</h1>
    </>
  );
};

export default Planet;
