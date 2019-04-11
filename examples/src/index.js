import React from "react";
import { render } from "react-dom";
import ContainerCounter from "../../src/ContainerCounter";

const App = () => <ContainerCounter />;

render(<App />, document.getElementById("root"));
