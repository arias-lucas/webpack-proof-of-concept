import React, { useState } from "react";
import PresentationalCounter from "./PresentationalCounter";

const ContainerCounter = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);

  return (
    <PresentationalCounter
      counter={counter}
      incrementCounter={incrementCounter}
    />
  );
};

export default ContainerCounter;
