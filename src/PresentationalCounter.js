import React from "react";

const PresentationalCounter = React.memo(props => {
  return (
    <div style={{ textAlign: "center" }}>
      {props.counter}
      <br />
      <button onClick={props.incrementCounter}>Increment</button>
    </div>
  );
});

export default PresentationalCounter;
