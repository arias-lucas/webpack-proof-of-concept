import React from "react";
import Button from "@material-ui/core/Button";

const PresentationalCounter = React.memo(props => {
  return (
    <div style={{ textAlign: "center" }}>
      <div>{props.counter}</div>
      <Button variant="outlined" onClick={props.incrementCounter}>
        Increment
      </Button>
    </div>
  );
});

export default PresentationalCounter;
