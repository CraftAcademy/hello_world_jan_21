import React, { useState } from "react";
import Planet from "./Planet";
import { useSelector } from "react-redux";
import { onChangeHandler } from "./greetingHelper";

const App = () => {
  const [greeting, setGreeting] = useState("Hello");

  const { message, receiver, sender } = useSelector((state) => state);

  const onClickHandler = () => {
    let newGreeting = greeting === "Hello" ? "Good afternoon" : "Hello";
    setGreeting(newGreeting);
  };

  return (
    <div>
      {greeting} <Planet /> from class component
      <button onClick={onClickHandler}>Change greeting</button>
      <input type="text" onChange={(event) => onChangeHandler(event)} />
      <br />
      {message} {receiver} from {sender}
    </div>
  );
};

export default App;
